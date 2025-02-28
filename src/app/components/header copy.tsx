"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "@/src/app/components/session-context";
import SignOutButton from "@/src/app/components/sign-out-button";
import globeIcon from "@/public/globe.svg";

interface HeaderProps {
  currentRoute?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { session } = useSession();
  const pathname = usePathname();

  const getAuthLink = (path: string) => {
    if (path === "/auth/sign-up") {
      return { text: "Sign In", href: "/auth/sign-in" };
    }
    return { text: "Sign Up", href: "/auth/sign-up" };
  };

  const authLink = getAuthLink(pathname);

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <header className="grid grid-rows-[auto_1fr] container mx-auto p-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
      <div className="flex items-center justify-between">
        <div className="w-1/2 flex justify-start">
          <Link href="/">
            <Image src={globeIcon} alt="Globe" width={25} height={25} className="inline mr-2" />
          </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="hidden md:flex items-center">
            <a href="#" className="text-blue-600 hover:underline mr-4">
              Link 1
            </a>
            <a href="#" className="text-blue-600 hover:underline mr-4">
              Link 2
            </a>
            {session ? (
              <div className="relative" ref={dropdownRef}>
                {session.user?.image && (
                  <>
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
                      <Image
                        src={session.user.image}
                        alt={session.user?.name || "User avatar"}
                        width={25}
                        height={25}
                        className="inline rounded-full cursor-pointer"
                        unoptimized={true}
                      />
                    </button>
                  </>
                )}
                {isDropdownOpen && (
                  <div className="absolute right-0 rounded-md z-20">
                    <div className="py-2">
                      <SignOutButton />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href={authLink.href} className="text-blue-600 hover:underline">
                {authLink.text}
              </Link>
            )}
          </div>
          <button
            className="md:hidden text-blue-600 focus:outline-none"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsDropdownOpen(false);
            }}
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-end" ref={dropdownRef}>
          <a href="#" className="block text-blue-600 hover:underline mb-2">
            Link 1
          </a>
          <a href="#" className="block text-blue-600 hover:underline mb-2">
            Link 2
          </a>
          {session ? (
            <div className="w-full flex justify-end">
              <SignOutButton />
            </div>
          ) : (
            <Link href={authLink.href} className="block text-blue-600 hover:underline">
              {authLink.text}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
