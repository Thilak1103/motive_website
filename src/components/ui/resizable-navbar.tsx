"use client";

/**
 * Adapted from Aceternity UI — "Resizable Navbar"
 * https://ui.aceternity.com/components/resizable-navbar
 *
 * Structure and scroll logic are the upstream implementation. Changed here:
 *   - colours swapped for design tokens (no hex values in this file)
 *   - the @tabler/icons-react dependency replaced with an inline SVG, to keep
 *     the mobile bundle small
 *   - the upstream `NavbarLogo` dropped in favour of <Wordmark />
 */

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      // Positioning is owned by <SiteHeader />, which is fixed to the viewport.
      className={cn("relative inset-x-0 top-0 z-50 w-full pt-3", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ minWidth: "800px" }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-content flex-row items-center justify-between self-start rounded-pill px-4 py-2 lg:flex",
        visible
          ? "border border-ink/10 bg-surface/85 shadow-sm"
          : "border border-transparent bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hovered"
              className="absolute inset-0 h-full w-full rounded-pill bg-ink/[0.07]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        width: visible ? "94%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center justify-between rounded-pill px-2 py-2 lg:hidden",
        visible
          ? "border border-ink/10 bg-surface/90 shadow-sm"
          : "border border-transparent bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex w-full flex-row items-center justify-between gap-2",
      className,
    )}
  >
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18 }}
        className={cn(
          "absolute inset-x-2 top-16 z-50 flex w-auto flex-col items-start justify-start gap-1 rounded-card border border-ink/10 bg-surface p-3 shadow-lg",
          className,
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      {isOpen ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  </button>
);
