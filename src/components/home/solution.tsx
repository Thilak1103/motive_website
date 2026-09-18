import { Container, Section, Eyebrow } from "@/components/site/section";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AppPreview } from "@/components/site/app-preview";
import { solution } from "@/content/home";

export const Solution = () => (
  <Section tone="surface" className="pb-0 sm:pb-0 lg:pb-0">
    <Container>
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow withRule={false} className="justify-center">{solution.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">
              {solution.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-ink-muted sm:text-lg">
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
