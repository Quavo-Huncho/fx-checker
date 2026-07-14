import { supabase } from "./supabase";

export async function signUp({
  firstName,
  lastName,
  email,
  password,
}) {
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

  return { data, error };
}

export async function signIn(
  email,
  password
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signInWithGoogle() {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo:
        window.location.origin,
    },
  });
}

export async function resetPassword(
  email
) {
  return await supabase.auth.resetPasswordForEmail(
    email,
    {
      redirectTo:
        window.location.origin +
        "/reset-password",
    }
  );
}

export async function signOut() {
  return await supabase.auth.signOut();
}