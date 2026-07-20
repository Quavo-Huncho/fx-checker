"use client";

import { useState } from "react";
import {
  signUp,
  signInWithGoogle,
} from "@/lib/auth";
import Link from "next/link"; 

export default function SignupPage() {
  const [firstName, setFirstName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await signUp({
  firstName,
  lastName,
  email,
  password,
});

console.log("SIGNUP DATA:", data);
console.log("SIGNUP ERROR:", error);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Check your email for verification."
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 mt-15">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 dark:text-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-10"
        >
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
            className="w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
          />

          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
            className="w-full rounded-xl border p-3 mt-4 dark:bg-slate-800 dark:text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border p-3 mt-4 dark:bg-slate-800 dark:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border p-3 mt-4 dark:bg-slate-800 dark:text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 mt-4 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center pt-4">Or</p>

        <button
          onClick={signInWithGoogle}
          className="mt-4 w-full rounded-xl border py-3 mt-4"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link href="/signin" className="text-blue-600 ml-1 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}