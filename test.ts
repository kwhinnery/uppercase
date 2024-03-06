import { assertEquals } from "jsr:@std/assert";
import { uppercase } from "./mod.ts";

Deno.test("test angry uppercase", () => {
  const str = uppercase("foo");
  assertEquals(str, "FOO!!!");
});
