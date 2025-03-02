"use client";
import { useSession } from "@/src/components/auth/session-context";
import { handleSignOut } from "@/src/lib/auth/sign-out-server-action";

const SignOutButton: React.FC = () => {
  const { setSession } = useSession();
  return (
    <button
      className="w-full text-left hover:underline"
      onClick={async () => {
        handleSignOut();
        setSession(null);
      }}
    >
      <span>Sign Out</span>
    </button>
  );
};

export default SignOutButton;
