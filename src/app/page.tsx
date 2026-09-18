import { Hero } from "@/components/home/hero";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { SocialProof } from "@/components/home/social-proof";
import { ClosingCta } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <SocialProof />
      <ClosingCta />
    </>
  );
}
