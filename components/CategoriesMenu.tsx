"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};

function CategoriesMenu({ title, state, filters, setState }: Props) {
  return (
    <div id="cate" className=" text-left mt-2 ml-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex whitespace-nowrap justify-center items-center gap-2 transition-all rounded-md  bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {state || "Category"}
            <Image src="/arrow-down.svg" alt="" width={14} height={14} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" flex flex-col gap-1 items-start absolute bg-violet-50 mt-2 rounded-md p-2 w-44 h-44 overflow-y-scroll">
            {filters.map((cate) => (
              <Menu.Item key={cate}>
                <button
                  type="button"
                  value={cate}
                  className=" py-2 pl-2 transition-all hover:bg-violet-500 hover:text-white cursor-pointer w-full rounded-md text-left"
                  onClick={(e) => setState(e.currentTarget.value)}
                >
                  {cate}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default CategoriesMenu;
