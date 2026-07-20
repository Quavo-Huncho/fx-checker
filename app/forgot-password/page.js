"use client";

import { useState } from "react";
import { resetPassword } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] =
    useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } =
      await resetPassword(email);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Password reset email sent."
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900 dark:text-white">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Reset Password
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-10"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 text-white mt-5">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}