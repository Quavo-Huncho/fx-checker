"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ResetPassword() {
  const [email, setEmail] =
    useState("");

  async function handleReset(e) {
    e.preventDefault();

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email
      );

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Password reset email sent."
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-3xl bg-white p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Reset Password
      </h1>

      <form
        onSubmit={handleReset}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="mb-4 w-full rounded-xl border p-3"
        />

        <button className="w-full rounded-xl bg-green-600 py-3 text-white">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}