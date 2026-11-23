import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "h-full border-border/80 hover:border-primary/40 hover:shadow-sm transition-all",
        className
      )}
    >
      <CardHeader className="space-y-3 pb-3">
        <div
          className={cn(
            "w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-primary border border-blue-100 dark:border-blue-900",
            iconClassName
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

