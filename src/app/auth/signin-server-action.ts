"use server";
import { signIn } from "./auth-js";

export const handleSignin = async ({ provider }: { provider: string }) => {
  try {
    await signIn(provider, { redirectTo: "/dashboard" });
  } catch (error) {
    throw error;
    console.error(error);
  }
};
