"use client";
import microsoftIcon from "@/public/microsoft.svg";
import { handleSignin } from "@/src/lib/auth/signin-server-action";
import Image from "next/image";

const MicrosoftSignInButton: React.FC = () => {
  return (
    <button
      className="sign-in-button flex-1"
      onClick={() => {
        handleSignin({ provider: "microsoft-entra-id" });
      }}
    >
      <Image
        src={microsoftIcon}
        alt="Sign in with Microsoft"
        width={18}
        height={18}
        className="inline"
      />
      {/* <span className="sign-in-text github-text">Sign in with Microsoft</span> */}
    </button>
  );
};

export default MicrosoftSignInButton;
