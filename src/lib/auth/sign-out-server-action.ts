"use server";
import { signOut } from "./auth-js";

export const handleSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
    // console.error(error);
  }
};
