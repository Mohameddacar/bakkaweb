import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Compass,
  Users,
  Award,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureCard } from "@/components/sections/feature-card";
import { CallToAction } from "@/components/sections/call-to-action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bakka Training Center's mission, vision, core values, and practical approach to skill building and professional education.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. PAGE HERO */}
      <PageHero
        badge="About Bakka Training Center"
        title="Empowering Potential Through Practical, Career-Ready Skills"
        description="We believe in education that delivers immediate, tangible capability. Bakka Training Center connects learners with actionable knowledge, guided mentorship, and practical training."
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* 2. OVERVIEW & BACKGROUND */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Badge variant="brand">Center Overview</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Fostering Excellence in Professional and Technical Training
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Bakka Training Center was founded with a singular purpose: to provide
                structured, high-quality, practical learning opportunities for youth, professionals,
                and corporate teams seeking to upgrade their capabilities in an increasingly demanding workplace.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Too often, educational programs lean heavily on passive memorization without
                sufficient hands-on execution. At Bakka, our methodology prioritizes practical labs,
                real-world scenarios, and guided feedback to ensure participants build competence and confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
                    <Target className="w-4 h-4 text-primary" />
                    <span>Real-World Readiness</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Instruction rooted in modern workplace demands and practical problem solving.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Supportive Mentorship</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Dedicated trainers committed to individualized guidance throughout every cohort.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg relative bg-slate-900 aspect-[4/3]">
                <Image
                  src="/images/banner.jpeg"
                  alt="Bakka Training Center Classroom Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-lg bg-slate-950/70 backdrop-blur-xs text-xs">
                  <span className="font-semibold text-amber-400">Classroom Atmosphere:</span>{" "}
                  Interactive, learner-centric, and focused on active participation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Direction & Purpose"
            title="Our Mission & Strategic Vision"
            description="Clear guiding principles shape every training curriculum, workshop, and participant interaction at Bakka."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-primary border border-blue-100 dark:border-blue-900">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {siteConfig.about.mission}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Action-oriented & learner-focused</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 border border-amber-200 dark:border-amber-900">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {siteConfig.about.vision}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-medium text-amber-600">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Excellence and long-term trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Foundational Values"
            title="The Values That Guide Our Center"
            description="These four core principles anchor our program development, instructor standards, and operational ethos."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.about.values.map((val, idx) => (
              <Card key={idx} className="border-border/80 h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRAINING APPROACH */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Instructional Approach"
            title="How We Deliver Practical Results"
            description="Our structured teaching framework ensures every student transitions smoothly from initial fundamentals to confident execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.about.trainingApproach.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={BookOpen}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FACULTY & INSTRUCTORS PLACEHOLDER NOTICE */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto rounded-xl border border-dashed border-border bg-slate-50 dark:bg-slate-900 p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mx-auto">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instructor Profiles & Faculty Rosters
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Bakka Training Center partners with experienced instructors and field practitioners.
              Detailed faculty profiles, specialized qualifications, and instructor spotlights will be
              published alongside official cohort schedules once client assets are verified.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="outline" size="sm" className="text-xs gap-1.5">
                  <span>Inquire About Course Facilitators</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <CallToAction
        title="Start Your Learning Journey with Bakka"
        description="Whether you are registering individually or arranging customized training for your staff, we are here to support your goals."
      />
    </div>
  );
}

