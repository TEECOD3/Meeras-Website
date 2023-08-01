import React from "react";
import { Loader2Icon } from "lucide-react";

const Soading = () => {
  return (
    <div className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 h-full w-full">
      <span className="text-8xl">
        <Loader2Icon className="animate-spin" />
      </span>
    </div>
  );
};

export default Soading;
