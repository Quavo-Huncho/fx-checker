"use client";

import { useState } from "react";
import {
  signUp,
  signInWithGoogle,
} from "@/lib/auth";

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

    const { error } = await signUp({
      firstName,
      lastName,
      email,
      password,
    });

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
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-950 dark:text-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
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
            className="w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <button
          onClick={signInWithGoogle}
          className="mt-4 w-full rounded-xl border py-3"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}