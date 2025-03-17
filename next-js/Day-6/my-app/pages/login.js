"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginButton() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    if (status === "authenticated") {
      //for countdown
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      // to redirect
      setTimeout(() => {
        router.replace("/dashboard");
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Checking authentication...</p>;
  }
  if (status === "unauthenticated") {
    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Sign in with Google
      </button>
    );
  }
  return (
    <div>
      <p className="text-xl font-semibold text-gray-800">
        Welcome, <span className="text-blue-500">{session?.user?.name}</span>!
      </p>
      <p className="text-lg text-gray-600 mt-2">
        Already logged in, Redirecting you in{" "}
        <span className="font-bold text-red-500">{countdown}</span> seconds...
      </p>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer mt-4 transition duration-200 hover:bg-red-600"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </button>
    </div>
  );
}
