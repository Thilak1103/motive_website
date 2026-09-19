import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faq } from "@/content/home";

export const Faq = () => (
  <Section tone="bone" id="faq">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          eyebrow={faq.eyebrow}
          headline={faq.headline}
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <Reveal>
          <Accordion items={faq.items} />
        </Reveal>
      </div>
    </Container>
  </Section>
);
