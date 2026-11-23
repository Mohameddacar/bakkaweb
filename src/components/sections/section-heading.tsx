import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3 mb-10 lg:mb-14",
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <Badge
          variant="brand"
          className={cn("font-medium", isCenter && "mx-auto")}
        >
          {badge}
        </Badge>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

