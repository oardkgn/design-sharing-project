"use client";

import React, { useRef, useCallback, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);
  
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target === overlay.current) && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className=" fixed z-10 px-6 md:px-12 lg:px-24 xl:px-48 w-screen left-0 right-0 top-0 pt-10 bottom-0 mx-auto bg-black/80"
      onClick={(e) => handleClick(e)}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-4 right-8"
      >
        <Image src="/close.svg" width={17} height={17} alt="close" />
      </button>

      <div
        ref={wrapper}
        className="flex justify-start items-center flex-col rounded-3xl  bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 max-h-[calc(100vh-70px)] h-full overflow-auto"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
