import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Laptop,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Users,
  Info,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { CallToAction } from "@/components/sections/call-to-action";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Training Services",
  description:
    "Explore Bakka Training Center's core programs: Professional Skills Development, Technical & Applied Skills, Corporate Training, and Foundational Youth Skills.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. PAGE HERO */}
      <PageHero
        badge="Our Training Offerings"
        title="Focused Programs Built for Measurable Competence"
        description="Explore our specialized training tracks designed to develop job-ready skills, elevate workplace performance, and strengthen organizational capability."
        breadcrumb={[{ label: "Services" }]}
      />

      {/* 2. SERVICES CATALOG */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Program Categories"
            title="Explore Our Core Training Areas"
            description="Each program is structured around practical exercises, instructor guidance, and relevant learning materials. Select a program below to review details or request enrollment info."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} showDetails={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENCY NOTICE ON SCHEDULES & PRICING */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
                <Info className="w-4 h-4 text-primary" />
                <span>Enrollment & Schedule Transparency</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                In adherence to our data integrity policy, Bakka Training Center does not fabricate
                static course fees, arbitrary start dates, or false accreditation badges. Exact cohort schedules,
                syllabi outlines, and enrollment prerequisites are provided directly upon inquiry based on current center planning.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button size="sm" className="gap-2 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>Request Current Schedules</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM CORPORATE CAPACITY BUILDING */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-wider text-primary uppercase">
                Enterprise & Institutional Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Need Customized Training for Your Organization or Team?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We design tailored workshops and cohort sprints for private companies, non-profit organizations,
                and institutions. Our team collaborates with you to assess current performance gaps, customize the syllabus,
                and deliver hands-on sessions either on-site or at the Bakka Center.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    1. Needs Analysis
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Understanding your team&apos;s specific operational requirements.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    2. Customized Content
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Workshops built around your company&apos;s actual workflows.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    3. Flexible Delivery
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Flexible scheduling adapted to your staff work hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="rounded-xl border border-border bg-slate-50 dark:bg-slate-900 p-6 space-y-4 w-full text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Corporate Partnership Desk
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Connect with our program coordinators to discuss custom group packages and syllabus outlines.
                </p>
                <Link
                  href="/contact?subject=Custom%20Corporate%20Training"
                  className="block w-full"
                >
                  <Button variant="default" className="w-full text-xs">
                    Inquire for Corporate Training
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <CallToAction
        title="Ready to Enroll or Discuss Training Needs?"
        description="Get in touch with our team today to discover how Bakka Training Center can support your career or organizational upskilling goals."
      />
    </div>
  );
}

