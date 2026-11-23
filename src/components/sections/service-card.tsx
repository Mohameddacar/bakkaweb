import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  Laptop,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceCategory } from "@/config/site";

interface ServiceCardProps {
  service: ServiceCategory;
  showDetails?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6 text-primary" />,
  Laptop: <Laptop className="w-6 h-6 text-primary" />,
  Building2: <Building2 className="w-6 h-6 text-primary" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-primary" />,
};

export function ServiceCard({ service, showDetails = true }: ServiceCardProps) {
  const icon = iconMap[service.icon] || <Briefcase className="w-6 h-6 text-primary" />;

  return (
    <Card
      id={service.id}
      className="flex flex-col h-full border-border/80 hover:border-primary/40 hover:shadow-md transition-all group"
    >
      <CardHeader className="space-y-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          {service.statusBadge && (
            <Badge variant="outline" className="text-xs font-medium border-slate-300">
              {service.statusBadge}
            </Badge>
          )}
        </div>

        <div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 text-sm pt-2">
        {showDetails && (
          <>
            {/* Target Audience */}
            <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3.5 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>Target Learners</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.targetAudience}
              </p>
            </div>

            {/* What to expect */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                What Learners Can Expect:
              </span>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {service.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="pt-4 border-t border-border/50">
        <Link
          href={`/contact?subject=${encodeURIComponent(service.title)}`}
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full justify-between group-hover:border-primary group-hover:text-primary text-xs"
          >
            <span>Inquire About This Program</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

