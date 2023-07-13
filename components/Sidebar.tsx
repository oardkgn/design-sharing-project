"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { categoryFilters } from "@/constant";

function Sidebar() {

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  return (
    <div className=" max-h-[650px] rounded-b-md pb-4 overflow-hidden">
      <div className=" w-full min-w-full hidden md:block max-w-[28%] lg:max-w-[20%]">
        <nav className="  bg-[#e0f0ff] rounded h-[calc(100vh-110px)] py-4 overflow-y-scroll">
          <ul className="flex flex-col text-sm lg:text-lg text-[#4A55A2] gap-1 px-3">
          {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "bg-[#4A55A2] text-violet-50 font-medium"
                : "font-normal"
            } capitalize categoryBtn`}
          >
            {filter}
          </button>
        ))}
          </ul>
        </nav>
      </div>
      <div className=" md:hidden">
        <nav className="  pt-4  pb-3  bg-[#e0f0ff] rounded overflow-x-scroll">
          <ul className="flex text-sm min-w-fit  lg:text-lg text-[#4A55A2] gap-1 px-3">
          {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "bg-light-white-300 font-medium"
                : "font-normal"
            } capitalize categoryBtn`}
          >
            {filter}
          </button>
        ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
