"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { SessionInterface } from "@/common.types";

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
  const [openModal, setOpenModal] = useState(false);
    
  window.addEventListener("click", function (e: any) {
    if(!e.target.classList.value.includes("profileModal")){
        setOpenModal(false)
    };
  });
  return (
    <div className="flexCenter profileModal z-10 flex-col relative mt-2">
      <Menu as="div">
        <Menu.Button
          className="flexCenter profileModal"
          onClick={() => {
            setOpenModal(!openModal);
          }}
          onMouseEnter={() => setOpenModal(true)}
        >
          {session?.user?.image && (
            <Image
              src={session.user.image}
              width={40}
              height={40}
              className="rounded-full profileModal"
              alt="user profile image"
            />
          )}
        </Menu.Button>

        <Transition
          show={openModal}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className=" absolute profileModal top-[calc(100%+20px)] right-1/2 translate-x-1/2 bg-white w-60 rounded shadow-lg px-4 pl-2 py-6 pb-2"
            onMouseLeave={() => setOpenModal(false)}
          >
            <div className="flex flex-col profileModal items-center gap-y-4">
              {session?.user?.image && (
                <Image
                  src={session?.user?.image}
                  className="rounded-full"
                  width={80}
                  height={80}
                  alt="profile Image"
                />
              )}
              <p className="font-semibold">{session?.user?.name}</p>
            </div>

            <div className="flex flex-col gap-1 pt-5 items-start w-full">
              <Menu.Item>
                <Link
                  href={`/profile/${session?.user?.id}`}
                  className="text-sm hover:bg-gray-50 transition-all w-full py-2 pl-2 rounded"
                >
                  Work Preferences
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={`/profile/${session?.user?.id}`}
                  className="text-sm hover:bg-gray-50 transition-all w-full py-2 pl-2 rounded"
                >
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={`/profile/${session?.user?.id}`}
                  className="text-sm hover:bg-gray-50 transition-all w-full py-2 pl-2 rounded"
                >
                  Profile
                </Link>
              </Menu.Item>
            </div>
            <div className="w-full flexStart border-t border-nav-border mt-2 pt-2">
              <Menu.Item>
                <button
                  type="button"
                  className="text-sm hover:bg-red-50 hover:text-red-300 transition-all w-full py-2 pl-2 rounded"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
