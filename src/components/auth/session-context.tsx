"use client";

import type { Session } from "@/src/lib/auth/get-session";
import { createContext, ReactNode, useContext, useState } from "react";

const SessionContext = createContext<{
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}>({
  session: null,
  setSession: () => null,
});

export const SessionProvider = ({
  children,
  session: initialSession,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  const [session, setSession] = useState<Session | null>(initialSession);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
