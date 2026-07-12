"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getPageGroupVisibility } from "@/lib/page-groups";

const PUBLIC_PATHS = [];
const AUTH_ENABLED = process.env.NEXT_PUBLIC_AUTH_ENABLED === "true";

function isAuthenticated() {
  if (typeof window === 'undefined') return false;

  const storedSession = window.localStorage.getItem('property_fb_session');

  if (!storedSession) return false;

  try {
    const session = JSON.parse(storedSession);

    if (!session?.token) {
      window.localStorage.removeItem('property_fb_session');
      return false;
    }

    if (session.expiresAt && session.expiresAt <= Date.now()) {
      window.localStorage.removeItem('property_fb_session');
      return false;
    }

    return true;
  } catch {
    window.localStorage.removeItem('property_fb_session');
    return false;
  }
}

export default function AuthGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/login" || pathname === "/logout") {
      if (AUTH_ENABLED) return;
      router.replace("/");
    }

    const isPublicPath = PUBLIC_PATHS.some(
      (path) => pathname === path || pathname.startsWith(`/${path}`)
    );

    if (isPublicPath) {
      return;
    }

    const visibility = getPageGroupVisibility();
    const mainPath = pathname.split("/")[1];

    if (visibility[mainPath]) {
      if (!AUTH_ENABLED) return;
      if (!isAuthenticated()) router.replace('/login');
    }

    AUTH_ENABLED ? router.replace('/login') : router.replace('/');
  }, [pathname, router])

  return <>{children}</>
}
