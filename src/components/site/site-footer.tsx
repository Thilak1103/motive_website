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

export const SiteFooter = () => (
  <footer className="border-t border-ink/10 bg-bone py-12 sm:py-16">
    <Container>
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Wordmark />
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-2">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="grid h-10 w-10 place-items-center rounded-pill border border-ink/15 text-ink transition hover:border-ink/50"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium sm:justify-end">
            {siteConfig.nav.map((item) => (
              <Link key={item.link} href={item.link} className="hover:underline">
                {item.name}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sm text-ink-muted hover:text-ink"
          >
            {siteConfig.contactEmail}
          </a>

          <CtaButton cta={siteConfig.cta.primary} variant="accent" size="md" />
        </div>
      </div>

      <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-muted">
        &copy; {new Date().getFullYear()} {siteConfig.name}. Built for{" "}
        {siteConfig.launch.university} students.
      </p>
    </Container>
  </footer>
);
