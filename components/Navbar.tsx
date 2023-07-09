import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <header className=" h-16 w-full border-b border-[#4A55A2] border-opacity-10 flex items-center">
      <div className=" max-w-7xl w-full mx-auto flex justify-between">
        <Image src="/logo.svg" width={116} height={43} alt="logo" priority />
        <div className="flex items-center gap-8 ">
          <nav>
            <ul className=" flex gap-6 text-sm font-medium">
              <li className=""><a className=" transition-all border-opacity-100 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]" href="">Inspiration</a></li>
              <li className=""><a className=" transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]" href="">Find Projects</a></li>
              <li className=""><a className=" transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]" href="">Learn Development</a></li>
              <li className=""><a className=" transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]" href="">Career Advancement</a></li>
              <li className=""><a className=" transition-all border-opacity-0 hover:border-opacity-100 border-b-2 border-[#4A55A2] py-[24px]" href="">Hire Developers</a></li>
            </ul>
          </nav>
          <button className=" px-3 py-2 shrink-0 bg-[#4A55A2] text-violet-50 rounded ">Sign In</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
