import { redirect } from "next/navigation";

import { getSession } from "@/src/lib/auth/get-session";

const Page: React.FC = async () => {
  const session = await getSession();

  if (!session) {
    return redirect("/auth/sign-in");
  }

  return (
    <div className="mx-auto p-4 md:flex md:items-center md:justify-between 2xl:max-w-screen-2xl">
      <section className="w-full">
        <h2 className="mb-4 text-xl">Dashboard</h2>
        <p className="">Session Info:</p>
        {session ? (
          <p className="overflow-hidden text-pretty break-words">
            {JSON.stringify(session, null, 2)}
          </p>
        ) : (
          <p>User is not authenticated</p>
        )}
      </section>
    </div>
  );
};

export default Page;
