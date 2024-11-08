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

export const parseText = (text: string) => {
  const REGEX_STRONG = /\*\*(.*?)\*\*/g;
  const REGEX_ITALIC = /\*(.*?)\*/g;

  const italics = text.match(REGEX_ITALIC);
  const strongs = text.match(REGEX_STRONG);
  let parsedString: string = "";

  if (italics && italics?.length > 0) {
    parsedString = text.replace(REGEX_ITALIC, (_, p1) => {
      return `<span class='italic'>${p1}</span>`;
    });
  }
  if (strongs && strongs.length > 0) {
    parsedString = text.replace(REGEX_STRONG, (_, p1) => {
      return `<strong>${p1}</strong>`;
    });
  }
  return parsedString;
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
