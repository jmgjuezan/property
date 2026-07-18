"use client";

import Image from "next/image";

const FACEBOOK_OAUTH_URL = "https://www.facebook.com/v22.0/dialog/oauth"

export default function Login() {
  const facebookAuthUrl = (() => {
    const appId = process.env.FACEBOOK_APP_ID
    const redirectUri = process.env.FACEBOOK_REDIRECT_URI

    if (!appId || !redirectUri) {
      return null
    }

    const params = new URLSearchParams({
      client_id: appId,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: "email,public_profile",
    })

    return `${FACEBOOK_OAUTH_URL}?${params.toString()}`
  })()

  const handleFacebookLogin = () => {
    if (!facebookAuthUrl) {
      window.alert(
        "Set FACEBOOK_APP_ID and FACEBOOK_REDIRECT_URI to enable Facebook login."
      )
      return
    }

    window.location.assign(facebookAuthUrl)
  }

  return (<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image
        alt="Property Management"
        width={500}
        height={500}
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        className="mt-15 mx-auto h-10 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
        Sign in with your account
      </h2>
    </div>

    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="mt-6">
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-blue-500/40 bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          <span className="text-base">f</span>
          Continue with Facebook
        </button>
      </div>
    </div>
  </div>);
}
