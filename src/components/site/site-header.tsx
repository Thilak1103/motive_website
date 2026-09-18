"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { Wordmark } from "@/components/site/wordmark";
import { CtaButton } from "@/components/site/cta-button";
import { siteConfig } from "@/config/site";
import { useScrolled } from "@/lib/use-scrolled";
import { cn } from "@/lib/utils";

/**
 * Sticky on every page and every breakpoint. The primary CTA sits in the bar
 * itself on mobile — never inside the collapsed menu — so it is reachable
 * without opening anything.
 *
 * Unscrolled the header sits on the brand-coloured hero, so it is light-on-dark;
 * once condensed into its pill it is dark-on-light.
 */
export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();

  const tone = scrolled ? "text-ink" : "text-ink-inverse";

  return (
    // `fixed`, not `absolute` + a sticky child: a sticky element can only stick
    // inside its own positioned ancestor, so nesting it in an absolute header
    // made it scroll away (and produced ghosts in full-page captures).
    <header className="fixed inset-x-0 top-0 z-50">
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <Wordmark tone={scrolled ? "ink" : "inverse"} />
          <NavItems items={[...siteConfig.nav]} className={tone} />
          <div className="relative z-20">
            <CtaButton cta={siteConfig.cta.primary} variant="accent" size="md" />
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <Wordmark tone={scrolled ? "ink" : "inverse"} />
            <div className="flex items-center gap-1">
              <CtaButton
                cta={siteConfig.cta.primary}
                variant="accent"
                size="sm"
              />
              <span className={tone}>
                <MobileNavToggle
                  isOpen={isOpen}
                  onClick={() => setIsOpen((v) => !v)}
                />
              </span>
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "w-full rounded-pill px-4 py-3 text-base font-semibold text-ink",
                  "hover:bg-ink/[0.06]",
                )}
              >
                {item.name}
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
};
