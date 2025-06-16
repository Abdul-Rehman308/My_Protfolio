import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        // 'mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-16 xl:px-24',
        "mx-auto max-w-screen-xl px-6 sm:px-12 lg:px-20 xl:px-32",

        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

