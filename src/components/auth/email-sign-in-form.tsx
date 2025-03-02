import { signIn } from "@/src/lib/auth/auth-js";
import { FaEnvelope } from "react-icons/fa";

interface EmailSignInProps {
  particle: string;
}

export default function EmailSignIn({ particle }: EmailSignInProps) {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("sendgrid", formData);
      }}
    >
      <div className="email-input-container">
        <FaEnvelope className="email-icon text-gray-400" />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="sign-in-button mb-3 block w-full text-left"
        />
      </div>
      <button
        className="sign-in-button w-full bg-blue-600 p-1 text-white"
        type="submit"
      >
        Sign {particle.toLowerCase()} with E-Mail
      </button>
    </form>
  );
}
