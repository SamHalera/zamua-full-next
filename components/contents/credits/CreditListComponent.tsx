import { Credit } from "@prisma/client";
import Link from "next/link";
import React from "react";

const CreditListComponent = ({ credits }: { credits?: Credit[] }) => {
  return (
    <ul>
      {credits?.map((credit) => {
        return (
          <li key={credit.id} className=" list-disc mb-5">
            {credit.name}{" "}
            {credit.url && (
              <Link
                className="text-primary font-semibold duration-500 hover:text-primary/70"
                href={credit.url}
              >
                ({credit.url})
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CreditListComponent;
