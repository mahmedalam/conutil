import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatFileSize(bytes: number, toFixed = 2): string {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;

  if (bytes < megabyte) {
    return `${(bytes / kilobyte).toFixed(toFixed)} KB`;
  }

  if (bytes < gigabyte) {
    return `${(bytes / megabyte).toFixed(toFixed)} MB`;
  }

  return `${(bytes / gigabyte).toFixed(toFixed)} GB`;
}

export function removeExtension(filename: string): string {
  return filename.split(".").slice(0, -1).join(".");
}
