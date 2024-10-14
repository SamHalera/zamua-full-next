import { getCredits } from "@/actions/credits";
import CreditListComponent from "@/components/contents/credits/CreditListComponent";
import Link from "next/link";
import React from "react";

const page = async () => {
  const credits = await getCredits();
  return (
    <div className="p-20">
      <h1 className="text-3xl font-semibold mb-6"> CREDITS </h1>
      <div className="flex flex-col gap-4">
        <p className="text-xl">
          The site displays images taken by professional and dedicated
          photographers.
        </p>
        <p className="text-xl">
          It is important to mention them all because they do a remarkable job.
          So thanks to them for giving me permission to use their works,
          especially in the{" "}
          <Link
            className="text-primary font-semibold duration-500 hover:text-primary/70"
            href={"/photos"}
          >
            Photos section.
          </Link>
        </p>
        <p className="text-xl font-bold">
          The photographers are (in alphabetical order):
        </p>
        <CreditListComponent credits={credits} />
      </div>
    </div>
  );
};

export default page;
