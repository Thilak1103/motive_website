import { Hero } from "@/components/home/hero";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Features } from "@/components/home/features";
import { SocialProof } from "@/components/home/social-proof";
import { Faq } from "@/components/home/faq";
import { ClosingCta } from "@/components/home/closing-cta";

/**
 * TONE ARC — see the note on <Section />. The grounds alternate deliberately:
 * brand → bone → surface → bone-light → surface → bone → brand-deep.
 *
 * The step-by-step walkthrough used to sit between the features and the
 * society strip. It is /how-it-works now: it was competing with the feature
 * grid to explain the same thing in the same scroll.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <SocialProof />
      <Faq />
      <ClosingCta />
    </>
  );
}
