import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-auto left-auto h-0.7 w-0.8 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-['']  before:absolute before:top-auto before:transform before:-translate-y-[50%] before:w-[60px] before:h-[1.6px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 10,
            left: Math.floor(Math.random() * (800 - -100) + -1000) + "px",
            animationDelay: Math.random() * (0.6 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (5 - 2) + 3) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

