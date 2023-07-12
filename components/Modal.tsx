"use client";
import { Transition } from "@headlessui/react";
import React, {
  useRef,
  useCallback,
  ReactNode,
  Fragment,
  useState,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isModalActive, setIsModalActive] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (path.includes('create-project')) {
      setIsModalActive(true)
    }
  }, [])
  

  const onDismiss = () => {
    setIsModalActive(!isModalActive);
    setTimeout(() => {
      router.push("/")
    }, 500);
  };

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className=" fixed z-10 px-6 md:px-12 lg:px-24 xl:px-32 w-screen left-0 right-0 top-0 pt-10 bottom-0 mx-auto bg-black/80"
      onClick={(e) => handleClick(e)}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-4 right-8"
      >
        <Image src="/close.svg" width={17} height={17} alt="close" />
      </button>
      <Transition
        show={isModalActive}
        as={Fragment}
        enter="transition ease-out duration-[600ms]"
        enterFrom="transform opacity-0 scale-75"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-[400ms]"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-75"
      >
        <div
          ref={wrapper}
          className="flex justify-start items-center flex-col rounded-3xl pb-14  bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 max-h-[calc(100vh-70px)] h-full overflow-auto"
        >
          {children}
        </div>
      </Transition>
    </div>
  );
}

export default Modal;
