import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { SocialProof } from "@/components/home/social-proof";
import { Faq } from "@/components/home/faq";
import { ClosingCta } from "@/components/home/closing-cta";

/**
 * TONE ARC — see the note on <Section />. The grounds alternate deliberately:
 * brand → bone-light → bone → surface → bone-light → bone → surface → bone →
 * brand-deep. Two sections on the same ground in a row read as one, which is
 * what the first version of this page did.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Faq />
      <ClosingCta />
    </>
  );
}
