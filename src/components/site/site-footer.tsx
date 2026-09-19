import Link from "next/link";
import { Container } from "@/components/site/section";
import { CtaButton } from "@/components/site/cta-button";
import { Wordmark } from "@/components/site/wordmark";
import {
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon,
} from "@/components/site/social-icons";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { name: "Instagram", href: siteConfig.socials.instagram, Icon: InstagramIcon },
  { name: "TikTok", href: siteConfig.socials.tiktok, Icon: TikTokIcon },
  { name: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
];

/**
 * Grouped by audience rather than by page, because the site has two audiences
 * and a flat list of four links made it look like a smaller product than it is.
 *
 * Sits on the brand ground so the page closes on the brand colour instead of
 * fading out on bone.
 */
export const SiteFooter = () => (
  <footer className="on-brand relative overflow-hidden bg-brand pt-14 sm:pt-16">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-60"
    />
    <Container className="relative">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-16">
        {/* Identity + the one action. */}
        <div className="max-w-sm">
          <Wordmark tone="inverse" />
          <p className="mt-4 text-body-sm leading-relaxed text-brand-tint">
            {siteConfig.description}
          </p>
          <div className="mt-6">
            <CtaButton
              cta={siteConfig.cta.primary}
              variant="accent"
              size="md"
              withArrow
            />
          </div>
          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="grid h-10 w-10 place-items-center rounded-pill border border-brand-tint/30 text-brand-tint transition-colors duration-[180ms] ease-brand hover:border-brand-tint hover:text-ink-inverse"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation, by audience. */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3"
        >
          {siteConfig.footerNav.map((group) => (
            <div key={group.heading}>
              <h2 className="font-display text-label uppercase text-accent">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className="text-body-sm text-brand-tint transition-colors duration-[180ms] ease-brand hover:text-ink-inverse"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-brand-tint/20 py-6 text-caption text-brand-tint/70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built for{" "}
          {siteConfig.launch.university} students.
        </p>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="transition-colors duration-[180ms] ease-brand hover:text-ink-inverse"
        >
          {siteConfig.contactEmail}
        </a>
      </div>
    </Container>
  </footer>
);
