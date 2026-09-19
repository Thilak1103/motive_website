import { Container, Section, Eyebrow } from "@/components/site/section";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AppPreview } from "@/components/site/app-preview";
import { solution } from "@/content/home";

/**
 * The full-width look at the feed. The hero shows the same preview in a phone
 * frame; this is the same markup at size, so there is one source of truth for
 * what the app looks like.
 */
export const Solution = () => (
  <Section tone="surface" className="pb-0 sm:pb-0 lg:pb-0">
    <Container>
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow withRule={false} className="justify-center">
              {solution.eyebrow}
            </Eyebrow>
            <h2 className="mt-5 text-display-3">{solution.headline}</h2>
            <p className="mx-auto mt-5 max-w-prose text-body-lg text-ink-muted">
              {solution.body}
            </p>
          </div>
        }
      >
        <AppPreview />
      </ContainerScroll>
    </Container>
  </Section>
);
