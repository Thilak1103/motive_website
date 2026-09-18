import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/site/section";
import { CtaButton } from "@/components/site/cta-button";
import { InterestForm } from "@/components/site/interest-form";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { societiesPage } from "@/content/societies";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "For societies",
  description: societiesPage.hero.subhead,
};

const { hero, pain, benefits, getListed, form } = societiesPage;

export default function SocietiesPage() {
  return (
    <>
      <section className="on-brand bg-brand pb-16 pt-28 sm:pb-24 sm:pt-36">
        <Container>
          <Eyebrow tone="inverse">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.05] text-ink-inverse sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-tint sm:text-lg">
            {hero.subhead}
          </p>
          <div className="mt-9">
            <CtaButton cta={siteConfig.cta.societies} variant="accent" size="lg" />
          </div>
        </Container>
      </section>

      {/* Their pain, first. */}
      <Section tone="bone">
        <Container>
          <Eyebrow>{pain.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            {pain.headline}
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pain.points.map((point) => (
              <div
                key={point.title}
                className="rounded-card border border-ink/15 bg-surface p-5 sm:p-6"
              >
                <h3 className="font-display text-lg font-bold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What they get. */}
      <Section tone="surface">
        <Container>
          <Eyebrow>{benefits.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            {benefits.headline}
          </h2>
          <BentoGrid className="mt-10">
            {benefits.items.map((item) => (
              <BentoGridItem
                key={item.title}
                title={item.title}
                description={item.description}
                className={item.span}
              />
            ))}
          </BentoGrid>
        </Container>
      </Section>

      {/* How to get listed. */}
      <Section tone="bone">
        <Container>
          <Eyebrow>{getListed.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            {getListed.headline}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {getListed.steps.map((step) => (
              <li key={step.number}>
                <span className="font-display text-sm font-bold tracking-[0.14em] text-ink-muted">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-extrabold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Interest capture. */}
      <Section tone="brand" id="list-your-society">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow tone="inverse">{form.eyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-lg font-display text-3xl font-extrabold leading-[1.05] text-ink-inverse sm:text-5xl">
                {form.headline}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-brand-tint sm:text-lg">
                {form.body}
              </p>
            </div>

            <div className="lg:pt-3">
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
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
