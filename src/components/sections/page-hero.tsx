import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  description,
  breadcrumb,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-16 lg:py-24 border-b border-slate-700/60",
        className
      )}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs font-medium text-slate-400 mb-6"
          >
            <Link href="/" className="hover:text-slate-200 transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-slate-200 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-400 font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          {badge && (
            <Badge variant="accent" className="font-semibold tracking-wide">
              {badge}
            </Badge>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {description}
          </p>

          {children && <div className="pt-2">{children}</div>}
        </div>
      </div>
    </section>
  );
}

