import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "class-variance-authority/types";

export const cn = (...args: ClassValue[]) => twMerge(cx(args));
