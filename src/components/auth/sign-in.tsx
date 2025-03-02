import EmailSignIn from "@/src/components/auth/email-sign-in-form";
import GitHubSignInButton from "@/src/components/auth/github-sign-in-button";
import GoogleSignInButton from "@/src/components/auth/google-sign-in-button";
import MicrosoftSignInButton from "@/src/components/auth/microsoft-sign-in-button";
import Link from "next/link";

interface SignInProps {
  particle: string;
}

const SignIn: React.FC<SignInProps> = ({ particle }) => {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">Sign {particle}</h1>
      <div className="w-full">
        <EmailSignIn particle={particle} />
      </div>
      <p className="m-6 text-sm">or continue with</p>
      <div className="flex w-full space-x-4">
        <GoogleSignInButton />
        <GitHubSignInButton />
        <MicrosoftSignInButton />
      </div>
      {particle === "Up" ? (
        <p className="mt-6 text-gray-700">
          Have an account?{" "}
          <Link href="/auth/sign-in" className="text-blue-600">
            Sign in
          </Link>
        </p>
      ) : (
        <p className="mt-6 text-gray-700">
          <Link href="/auth/sign-up" className="text-blue-600">
            Create an account
          </Link>
        </p>
      )}
    </div>
  );
};

export default SignIn;
