"use client";
import { useSession } from "@/src/components/auth/session-context";
import SignOutButton from "@/src/components/auth/sign-out-button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GiOctogonalEye } from "react-icons/gi";

interface HeaderProps {
  currentRoute?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { session } = useSession();
  const pathname = usePathname();

  const getAuthLink = (path: string) => {
    if (path === "/" || path === "/auth/sign-up") {
      return { text: "Sign In", href: "/auth/sign-in" };
    }
    return { text: "Sign Up", href: "/auth/sign-up" };
  };

  const authLink = getAuthLink(pathname);

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header>
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <GiOctogonalEye className="bg-white text-4xl dark:bg-gray-900" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Octan
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            {session ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="sr-only">Open user menu</span>
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user?.name || "User avatar"}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                      unoptimized={true}
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {session.user?.name || "User"}
                      </span>
                      <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                        {session.user?.email || ""}
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">
                        <SignOutButton />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={authLink.href}
                className="text-blue-600 hover:underline"
              >
                {authLink.text}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
