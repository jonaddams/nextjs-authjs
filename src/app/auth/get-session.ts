"use server";
import { auth } from "./auth-js";

export interface Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}

export const getSession = async (): Promise<Session | false> => {
  const session = await auth();
  if (session && session.user) {
    return session as Session;
  } else {
    return false;
  }
};
