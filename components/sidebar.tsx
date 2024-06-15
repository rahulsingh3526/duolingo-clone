import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  style?: string;
};

export const Sidebar = ({ style }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        style
      )}
    >
      Sidebar
    </div>
  );
};
