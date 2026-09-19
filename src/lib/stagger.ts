import { motionTokens } from "@/config/tokens";

/**
 * Delay for the nth item in a staggered group, in seconds.
 *
 * This lives in a plain module rather than beside <Reveal />, which is a
 * `"use client"` file. Every non-component export from a client file becomes a
 * client *reference* under React Server Components: a server component can
 * render it, but it cannot call it. Exporting this helper from `reveal.tsx`
 * type-checked fine and failed only at prerender, with
 *
 *   Attempted to call revealDelay() from the server but revealDelay is on the
 *   client.
 *
 * Keep pure helpers out of "use client" files for this reason.
 */
export const revealDelay = (index: number, max = 6) =>
  motionTokens.stagger * Math.min(index, max);
