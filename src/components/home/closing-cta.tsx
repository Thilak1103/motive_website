import { Container, Section } from "@/components/site/section";
import { InterestForm } from "@/components/site/interest-form";
import { closing } from "@/content/home";
import { siteConfig } from "@/config/site";

/**
 * Anchor target for `siteConfig.cta.primary`. When there is a real app build,
 * point the CTA at the store link instead and this band can become a plain
 * download prompt.
 */
export const ClosingCta = () => (
  <Section tone="brand" id="early-access">
    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="max-w-lg font-display text-3xl font-extrabold leading-[1.05] text-ink-inverse sm:text-5xl lg:text-6xl">
            {closing.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-brand-tint sm:text-lg">
            {closing.body}
          </p>
        </div>

        <div className="lg:pt-3">
          <InterestForm
            tone="inverse"
            fields={[
              {
                name: "email",
                label: "Email",
                placeholder: `you@${siteConfig.launch.university.toLowerCase()}.ac.uk`,
                type: "email",
              },
            ]}
            submitLabel={siteConfig.cta.primary.label}
            successMessage="You're on the list. We'll message you the moment it's ready."
          />
        </div>
      </div>
    </Container>
  </Section>
);
