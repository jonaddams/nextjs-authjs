"use client";
import githubIcon from "@/public/github.svg";
import { handleSignin } from "@/src/app/auth/signin-server-action";
import Image from "next/image";

const GitHubSignInButton: React.FC = () => {
  return (
    <button
      className="sign-in-button flex-1"
      onClick={() => {
        handleSignin({ provider: "github" });
      }}
    >
      <Image
        src={githubIcon}
        alt="Sign in with GitHub"
        width={18}
        height={18}
        className="inline"
      />
      {/* <span className="sign-in-text github-text">GitHub</span> */}
    </button>
  );
};

export default GitHubSignInButton;
