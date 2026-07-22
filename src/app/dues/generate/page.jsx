"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import fetchProperties from "@/api/property/get-properties";
import fetchTenants from "@/api/tenant/get-tenants";
import fetchExclusions from "@/api/exclusion/get-exclusions";
import saveDue from "@/api/due/save-due";
import { formatAmount, formatDate, formatName } from "@/lib/utility";
import ForToggle from "../_components/generate/for-toggle";
import Desktop from "../_components/list/desktop";
import {
  getDueDate, addAMonth, endOfMonth,
  countDays, validSelection, countExcludedDays,
} from "../_components/generate/utility";

const MOCK_ENABLED = process.env.NEXT_PUBLIC_MOCK_ENABLED === "true";

export default function GenerateDue() {
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);

  const [generated, setGenerated] = useState(false);
  const [dues, setDues] = useState([]);

  const [error, setError] = useState("");
  const [selection, setSelection] = useState({
    "dueYear": new Date().getFullYear(),
    "dueFor": "Water and Electricity",
    "water": 1246.55,
    "waterFromDate": "2025-03-07",
    "waterToDate": "2025-04-06",
    "electricity": 4212.76,
    "electricityFromDate": "2025-03-14",
    "electricityToDate": "2025-04-13",
  });

  useEffect(() => {
    fetchProperties()
      .then((res) => setProperties(res))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleGenerate = async () => {
    const { dueFor } = selection;
    if (!validSelection(selection)) {
      setError("Fill out all fields");
      return;
    }

    if (dueFor === "Rent") {
      await generateRent();
    } else {
      await generateUtilities();
    }

    setGenerated(true);
  };

  const getTenants = async () => {
    if (tenants.length > 0) return tenants;

    try {
      const res = await fetchTenants();
      setTenants(res);
      return res;
    } catch (err) {
      console.error("Fetch error:", err);
      return [];
    }
  }

  const generateRent = async () => {
    const { dueFor, property, dueMonth, dueYear } = selection;
    const loadedTenants = await getTenants();
    const filteredTenants = loadedTenants.filter((t) => t.property === property);
    let generatedDues = filteredTenants.map((t) => ({
      dueFor,
      property: t.property,
      name: MOCK_ENABLED ? formatName(t) : t._id,
      amount: t.rentAmount,
      dueDate: formatDate(getDueDate(t, dueMonth, dueYear)),
      totalAmount: formatAmount(t.rentAmount),
    }));
    generatedDues = generatedDues.map(due => ({
      ...due,
      coverageFromDate: due.dueDate,
      coverageFromTo: formatDate(addAMonth(due.dueDate)),
    }));

    setDues(generatedDues);
  }

  const computeBreakdown = async (tenants) => {
    const exclusions = await fetchExclusions();
    const inclusions = [];

    const {
      water, waterFromDate, waterToDate,
      electricity, electricityFromDate, electricityToDate,
    } = selection;

    if (exclusions.length === 0) { // Straight
      // Divide all by number of tenant
      const shareWater = water / tenants.length;
      const shareElectricity = electricity / tenants.length;
      const breakdown = [];

      tenants.map((t) => (breakdown.push({
        name: MOCK_ENABLED ? formatName(t) : t._id,
        amount: shareWater + shareElectricity,
        water: shareWater,
        electricity: shareElectricity,
      })));

      return breakdown;

    } else if (exclusions.length > 0 && inclusions.length === 0) { // With exclusion only
      // Base on number of days in the unit
      const waterDays = countDays(waterFromDate, waterToDate);
      const electricityDays = countDays(electricityFromDate, electricityToDate);

      let waterTotalDays = 0;
      let electricityTotalDays = 0;

      const breakdown = [];
      const shareDays = {};

      tenants.map((t) => {
        const filteredExclusions = exclusions.filter(e => e.name === t._id);

        const waterExclusionDays = countExcludedDays(filteredExclusions, waterFromDate, waterToDate);
        const electricityExclusionDays = countExcludedDays(filteredExclusions, electricityFromDate, electricityToDate);

        const waterShareDays = waterDays - waterExclusionDays;
        const electricityShareDays = electricityDays - electricityExclusionDays;

        waterTotalDays += waterShareDays;
        electricityTotalDays += electricityShareDays;

        shareDays[t._id] = {
          "waterShareDays": waterShareDays,
          "electricityShareDays": electricityShareDays,
        };
      });console.log(shareDays)

      const waterRate = water / waterTotalDays;console.log(waterTotalDays)
      const electricityRate = electricity / electricityTotalDays;console.log(electricityTotalDays)

      tenants.map((t) => {
        const shareWater = shareDays[t._id].waterShareDays * waterRate;
        const shareElectricity = shareDays[t._id].electricityShareDays * electricityRate;

        breakdown.push({
          name: MOCK_ENABLED ? formatName(t) : t._id,
          amount: formatAmount(shareWater + shareElectricity),
          water: formatAmount(shareWater),
          electricity: formatAmount(shareElectricity),
        });
      });

      return breakdown;
    } else if (exclusions.length === 0 && inclusions.length > 0) { // With inclusions only

    } else if (exclusions.length > 0 && inclusions.length > 0) { // With both exclusion and inclusion
      // TODO: No property have this so far
    }

    // Other than this is "Not supported" formula
  }

  const generateUtilities = async () => {
    const {
      dueFor, property, dueMonth,
      water, waterFromDate, waterToDate,
      electricity, electricityFromDate, electricityToDate,
    } = selection;
    const loadedTenants = await getTenants();
    const filteredTenants = loadedTenants.filter((t) => t.property === property);

    const generatedDue = {
      "dueFor": dueFor,
      "dueDate": formatDate(endOfMonth(Number(dueMonth))),
      "property": property,
      "totalAmount": formatAmount(Number(water) + Number(electricity)),
      "water": water,
      "waterFromDate": formatDate(waterFromDate),
      "waterToDate": formatDate(waterToDate),
      "electricity": electricity,
      "electricityFromDate": formatDate(electricityFromDate),
      "electricityToDate": formatDate(electricityToDate),
      "breakdown": await computeBreakdown(filteredTenants),
    };

    setDues([generatedDue]);
  }

  const handleSave = () => {
    dues.map(async (due) => {
      await saveDue(due);
    });

    redirect("/dues");
  }

  return (<div className="mt-10 mb-10 flex items-center justify-center gap-4">
    <div className="mt-6 border-t border-white/10">
      <dl className="divide-y divide-white/10">
        <ForToggle
          selection={selection}
          setSelection={setSelection}
          properties={properties}
          setGenerated={setGenerated}
          setDues={setDues}
          setError={setError}
        />

        { error && (<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
          <dd className="mt-1 text-sm/6 text-red-500 sm:col-span-2 sm:mt-0 text-right ml-2">
            {error}
          </dd>
        </div>)}
      
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
          <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 text-right ml-2">
            <Link href="/dues" className="text-sm/6 font-semibold text-white mr-4">
              Back
            </Link>
            <button
              onClick={handleGenerate}
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
            >
              Generate
            </button>
          </dd>
        </div>

        { generated && (<>
          { dues.length > 0 ? 
          (<>
            <Desktop dues={dues} generated={true} />
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-100 ml-2"></dt>
              <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0 text-right ml-2">
                <Link href="/dues" className="text-sm/6 font-semibold text-white mr-4">
                  Back
                </Link>
                <button
                  onClick={handleSave}
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
                >
                  Save
                </button>
              </dd>
            </div>
          </>) : (
            <div className="mb-5 mt-5 hidden sm:block">
              <div className="text-center">No due generated</div>
            </div>
          )}
        </>)}
      </dl>
    </div>
  </div>);
}
