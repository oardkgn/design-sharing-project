"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";

type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

const Pagination = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  hasNextPage,
}: Props) => {
  const router = useRouter();


  const handleNavigation = (type: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    

    if (type === "prev" && hasPreviousPage) {
        currentParams.delete("endcursor");
        currentParams.set("startcursor", startCursor);
    } else if (type === "next" && hasNextPage) {
        currentParams.delete("startcursor");
        currentParams.set("endcursor", endCursor);
    }

    const newSearchParams = currentParams.toString();
    const newPathname = `${window.location.pathname}?${newSearchParams}`;

    router.push(newPathname);
  };

 
  

  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {hasPreviousPage && (
        <Button
          title="Previous Page"
          handleClick={() => handleNavigation("prev")}
        />
      )}
      {hasNextPage && (
        <Button
          title="Next Page"
          handleClick={() => handleNavigation("next")}
        />
      )}
    </div>
  );
};

export default Pagination;
