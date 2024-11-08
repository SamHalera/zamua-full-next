"use client";
import React from "react";
import {
  ArrayPath,
  FieldArray,
  FieldValues,
  UseFieldArrayAppend,
} from "react-hook-form";

import { PlusCircle } from "lucide-react";

interface ButtonAppendFieldArrayProps<T extends FieldValues> {
  label: string;
  append: UseFieldArrayAppend<T, ArrayPath<T>>;
  fieldToAppend: FieldArray<T, ArrayPath<T>>;
}
function ButtonAppendFieldArray<T extends FieldValues>({
  label,
  append,
  fieldToAppend,
}: ButtonAppendFieldArrayProps<T>) {
  return (
    <div
      onClick={() => {
        append(fieldToAppend);
      }}
      className="flex fixed bottom-20 md:left-20 items-center bg-slate-800 p-3 gap-3 text-white duration-500 hover:bg-slate-600 font-semibold cursor-pointer self-start rounded-md"
    >
      <PlusCircle /> <span className="hidden md:block">{label}</span>
    </div>
  );
}

export default ButtonAppendFieldArray;
