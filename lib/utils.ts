import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTitle = (text: string) => {
  const REGEX_TITLE = /\*\*(.*?)\*\*/g;

  const stripHTMLTags = (str: string) => str.replace(/<[^>]*>/g, "");
  return text.replace(REGEX_TITLE, (_, p1) => {
    return stripHTMLTags(
      `<strong class='text-primary font-bold'>${p1}</strong>`
    );
  });
};

export const extractErrorFieldFromErrorsObject = (
  error: any,
  keyToExtract: string
) => {
  if (error) {
    return error[keyToExtract];
  }
  return null;
};
