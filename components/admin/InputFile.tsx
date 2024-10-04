import { Input } from "@/components/ui/input";

import React from "react";

const InputFile = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 bg-slate-200 rounded">
      <Input id="picture" type="file" />
    </div>
  );
};

export default InputFile;
