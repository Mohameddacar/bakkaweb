"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on ESC key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow">
      {/* Top emergency / notice strip */}
      <div className="bg-slate-900 text-slate-100 px-4 py-1.5 text-xs font-medium text-center sm:text-left flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Welcome to {siteConfig.name} — Professional Learning & Applied Skills</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs text-slate-300">
            <span>Inquiries & Registration Support</span>
            <Link
              href="/contact"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1 font-semibold"
            >
              Contact Center
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
          aria-label={`${siteConfig.name} Home`}
        >
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border bg-white shadow-sm flex items-center justify-center p-0.5">
            <Image
              src="/logo/logo.png"
              alt="Bakka Training Center Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full"
              priority
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                // If local image fails to load, degrade gracefully
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Empowering Skills & Growth
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Main Navigation"
        >
          {siteConfig.mainNav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "bg-primary/10 text-primary font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/contact">
            <Button variant="default" size="default" className="gap-2 shadow-sm">
              <PhoneCall className="w-4 h-4" />
              <span>Get in Touch</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Accessible Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[110px] z-50 md:hidden bg-slate-900/60 backdrop-blur-xs flex flex-col justify-start"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="bg-background border-b border-border shadow-xl p-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2">
              {siteConfig.mainNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 text-base font-semibold rounded-lg transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground font-bold"
                        : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-border flex flex-col space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button className="w-full gap-2 justify-center py-6 text-base" variant="default">
                  <PhoneCall className="w-5 h-5" />
                  <span>Contact Bakka Center</span>
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">
                Inquiries regarding schedules, admissions, and corporate training.
              </p>
            </div>
          </div>

          {/* Clickable Backdrop to Close */}
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
}
