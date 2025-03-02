"use client";
import googleIcon from "@/public/google.svg";
import { handleSignin } from "@/src/lib/auth/signin-server-action";
import Image from "next/image";

const GoogleSignInButton: React.FC = () => {
  return (
    <button
      className="sign-in-button flex-1"
      onClick={() => {
        handleSignin({ provider: "google" });
      }}
    >
      <Image
        src={googleIcon}
        alt="Sign in with Google"
        width={18}
        height={18}
        className="inline"
      />
      {/* <span className="sign-in-text google-text">Sign in with Google</span> */}
    </button>
  );
};

export default GoogleSignInButton;
