import { isAuthenticated } from "@/src/app/auth/is-authenticated-server-action";
import SignIn from "@/src/app/components/sign-in";
import { redirect } from "next/navigation";

const Page: React.FC = async () => {
  const validSession = await isAuthenticated();

  if (validSession) {
    return redirect("/dashboard");
  } else {
    return <SignIn particle="In" />;
  }
};

export default Page;
