import octanImage from "@/public/octan.jpg";
import { getSession } from "@/src/app/auth/get-session";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    // <div className="flex justify-center min-h-screen items-center">
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto grid max-w-screen-2xl gap-8 p-4 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world&apos;s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            At Octan, we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <Link
              href="/auth/sign-up"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={octanImage}
            alt="Octan"
            priority={true}
            placeholder="blur"
            width={1000}
            height={780}
          />
        </div>
      </div>
    </section>
  );
}
