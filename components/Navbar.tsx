import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const session = false;

  return (
    <header className=" h-16 w-full border-b border-[#4A55A2] border-opacity-10 flex items-center">
      <div className=" px-6 w-full mx-auto flex justify-between">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" priority />
        </Link>
        <div className="flex items-center gap-8 ">
          <nav className=" hidden md:block">
            <ul className=" flex gap-3 lg:gap-6 text-sm lg:text-md text-[#0e0f1a] font-medium">
              <li className="">
                <a
                  className=" whitespace-nowrap text-xs font-semibold transition-all border-opacity-100 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]"
                  href=""
                >
                  Inspiration
                </a>
              </li>
              <li className="">
                <a
                  className=" whitespace-nowrap text-xs font-semibold transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]"
                  href=""
                >
                  Find Projects
                </a>
              </li>
              <li className="">
                <a
                  className=" whitespace-nowrap text-xs font-semibold transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]"
                  href=""
                >
                  Learn Development
                </a>
              </li>
              <li className="">
                <a
                  className=" whitespace-nowrap text-xs font-semibold transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]"
                  href=""
                >
                  Career Advancement
                </a>
              </li>
              <li className="">
                <a
                  className=" whitespace-nowrap text-xs font-semibold transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]"
                  href=""
                >
                  Hire Developers
                </a>
              </li>
            </ul>
          </nav>
          {session ? (
            <div className=" flex gap-4 items-center">
              <Link href="">Profile</Link>
              <button className="px-3 py-2 shrink-0 bg-[#4A55A2] text-violet-50 rounded">Design</button>
            </div>
          ) : (
            <button className=" px-3 py-2 shrink-0 bg-[#4A55A2] text-violet-50 rounded ">
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
