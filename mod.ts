/**
 * This function converts a string to all caps with !!! appended
 *
 * ```ts
 * import { uppercase } from "@kwhinnery/uppercase";
 *
 * console.log(uppercase("hello, world"));
 * ```
 *
 * @param str the string to capitalize
 * @returns an uppercase string with three bangs appended
 */
export function uppercase(str: string): string {
  return `${str}!!!`.toUpperCase();
}
