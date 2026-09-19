import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { InterestForm } from "@/components/site/interest-form";
import { closing } from "@/content/home";
import { siteConfig } from "@/config/site";

/**
 * Anchor target for `siteConfig.cta.primary`. When there is a real app build,
 * point the CTA at the store link instead and this band can become a plain
 * download prompt.
 */
export const ClosingCta = () => (
  <Section tone="brand-deep" id="early-access" grid>
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow={closing.eyebrow}
          headline={closing.headline}
          lead={closing.body}
          tone="inverse"
        />

        <Reveal className="lg:pt-2">
          <div className="card-on-brand p-5 sm:p-7">
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
              footnote={closing.footnote}
            />
          </div>
        </Reveal>
      </div>
    </Container>
  </Section>
);
