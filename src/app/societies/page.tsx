import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { InterestForm } from "@/components/site/interest-form";
import { Accordion } from "@/components/ui/accordion";
import { SocietiesHero } from "@/components/societies/hero";
import { Pain } from "@/components/societies/pain";
import { Comparison } from "@/components/societies/comparison";
import { Benefits } from "@/components/societies/benefits";
import { Pricing } from "@/components/societies/pricing";
import { GetListed } from "@/components/societies/get-listed";
import { societiesPage } from "@/content/societies";

export const metadata: Metadata = {
  title: "For societies",
  description: societiesPage.hero.subhead,
};

const { faq, form } = societiesPage;

/**
 * The committee-facing page. Order is deliberate: their pain, then what
 * changes, then what they get, then the cost (none), then how to start, then
 * the objections, then the form.
 */
export default function SocietiesPage() {
  return (
    <>
      <SocietiesHero />
      <Pain />
      <div id="what-changes">
        <Comparison />
      </div>
      <Benefits />
      <Pricing />
      <GetListed />

      <Section tone="surface" id="faq">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
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

      <Section tone="brand-deep" id="list-your-society" grid>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow={form.eyebrow}
              headline={form.headline}
              lead={form.body}
              tone="inverse"
            />
            <Reveal>
              <div className="card-on-brand p-5 sm:p-7">
                <InterestForm
                  tone="inverse"
                  fields={[
                    { name: "society", ...form.fields.society },
                    { name: "name", ...form.fields.name },
                    { name: "email", type: "email", ...form.fields.email },
                    { name: "role", ...form.fields.role },
                  ]}
                  submitLabel={form.submitLabel}
                  successMessage={form.successMessage}
                  footnote={form.footnote}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
