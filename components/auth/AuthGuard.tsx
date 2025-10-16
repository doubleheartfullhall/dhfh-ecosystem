"use client";

import { useState, type PropsWithChildren } from "react";

import { useAppContext } from "./AppProvider";

export function AuthGuard({ children }: PropsWithChildren): JSX.Element {
  const { user, signIn } = useAppContext();
  const [isSigningIn, setIsSigningIn] = useState(false);

  if (user) {
    return <>{children}</>;
  }

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signIn("demo@local");
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <p className="text-sm text-gray-500">Sign in to continue.</p>
      <button
        type="button"
        onClick={handleSignIn}
        className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
        disabled={isSigningIn}
      >
        {isSigningIn ? "Signing in..." : "Sign in"}
      </button>
    </div>
  );
}

export default AuthGuard;
