import UtilsContent from "@/components/admin/utils/UtilsContent";
import React from "react";

const pageUtils = () => {
  return (
    <div className="p-2 md:p-10 ">
      <div className="  flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 text-center">TOOLS</h1>
      </div>
      <div>
        <UtilsContent />
      </div>
    </div>
  );
};

export default pageUtils;
