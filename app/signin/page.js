"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth";

export default function SigninPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } =
      await signIn(
        email,
        password
      );

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href =
      "/dashboard";
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-950 dark:text-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-3"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-3"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600">
            Sign In
          </button>
        </form>

        <a
          href="/forgot-password"
          className="mt-4 block text-center text-blue-600 dark:text-blue-500 hover:underline"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
}