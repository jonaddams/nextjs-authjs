import SignIn from "@/src/components/auth/sign-in";
import { isAuthenticated } from "@/src/lib/auth/is-authenticated-server-action";
import { redirect } from "next/navigation";

const Page: React.FC = async () => {
  const validSession = await isAuthenticated();

  if (validSession) {
    return redirect("/dashboard");
  } else {
    return <SignIn particle="Up" />;
  }
};

export default Page;
