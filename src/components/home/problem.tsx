import { Container, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { revealDelay } from "@/lib/stagger";
import { StoryIcon, SearchIcon, FriendsIcon } from "@/components/site/icons";
import type { ReactElement } from "react";
import { problem } from "@/content/home";
import type { IconKey } from "@/content/home";

/** Only the keys this section uses — a full map would be dead code. */
const icons: Partial<Record<IconKey, (p: { className?: string }) => ReactElement>> = {
  story: StoryIcon,
  search: SearchIcon,
  friends: FriendsIcon,
};

export const Problem = () => (
  <Section tone="bone">
    <Container>
      <SectionHeading
        eyebrow={problem.eyebrow}
        headline={problem.headline}
      />

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <Reveal className="max-w-prose space-y-5 text-body-lg text-ink-muted">
          {problem.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        {/* The three symptoms, as a stack of ruled rows rather than boxes —
            boxes here competed with the bento grid two sections later. */}
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {problem.symptoms.map((symptom, index) => {
            const Icon = icons[symptom.icon];
            return (
              <Reveal
                as="li"
                key={symptom.title}
                delay={revealDelay(index)}
                className="flex gap-4 py-5"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-inner bg-brand text-accent">
                  {Icon && <Icon className="h-[18px] w-[18px]" />}
                </span>
                <div>
                  <h3 className="text-title text-ink">{symptom.title}</h3>
                  <p className="mt-1 text-body-sm text-ink-muted">
                    {symptom.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Container>
  </Section>
);
