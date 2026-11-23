import * as React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CallToAction({
  title = "Ready to Advance Your Skills with Bakka?",
  description = "Connect with our team to learn about upcoming training sessions, curriculum details, or custom capacity-building for your organization.",
  primaryButtonText = "Contact Bakka Training Center",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore Training Offerings",
  secondaryButtonHref = "/services",
}: CallToActionProps) {
  return (
    <section className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative accent element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-amber-400 border border-slate-700">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Structured Learning • Practical Competence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href={primaryButtonHref} className="w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{primaryButtonText}</span>
              </Button>
            </Link>

            <Link href={secondaryButtonHref} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 gap-2"
              >
                <span>{secondaryButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Have questions regarding group bookings or customized syllabi? Reach out anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

