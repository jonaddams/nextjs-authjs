"use server";
import { auth } from "./auth-js";

export const isAuthenticated = async () => {
  const session = await auth();

  if (session) {
    return true;
  } else {
    return false;
  }
};
