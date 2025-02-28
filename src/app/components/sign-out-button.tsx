"use client";
import { handleSignOut } from "@/src/app/auth/sign-out-server-actions";
import { useSession } from "@/src/app/components/session-context";

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
