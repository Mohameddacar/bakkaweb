import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Compass,
  ShieldCheck,
  Building,
  Target,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { FeatureCard } from "@/components/sections/feature-card";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 sm:py-24 lg:py-28 border-b border-slate-800">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Bakka Training Center • Skills for Tomorrow</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Equipping You with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                  Practical Skills
                </span>{" "}
                for Real-World Impact
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bakka Training Center delivers focused, hands-on professional development,
                technical skills, and capacity-building programs designed for students,
                working professionals, and organizations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/services" className="w-full sm:w-auto">
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm font-semibold shadow-md"
                  >
                    <span>Explore Training Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 gap-2 text-sm"
                  >
                    <span>Contact Our Team</span>
                  </Button>
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on Practice Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive Cohorts</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Career-Aligned Learning</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-2xl">
                <div className="relative aspect-[4/3] w-full bg-slate-900">
                  <Image
                    src="/images/cover.png"
                    alt="Bakka Training Center Overview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-white">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Center Identity
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      Dedicated to Measurable Learning & Practical Readiness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CENTER OVERVIEW SECTION */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="brand">About Bakka Training Center</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Bridging the Gap Between Classroom Theory and Workplace Execution
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Bakka Training Center was created to provide accessible, structured, and
              market-relevant learning experiences. Whether you are a student aiming to build a
              strong professional foundation, a working professional seeking modern skills, or an
              institution upgrading staff performance, we offer an environment built around real practice.
            </p>
            <div className="pt-2">
              <Link href="/about">
                <Button variant="outline" className="gap-2 text-xs">
                  <span>Learn More About Our Mission & Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TRAINING OFFERINGS */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Training Areas"
            title="Comprehensive Skills Programs"
            description="Explore our core training categories designed to serve individuals and organizations at every stage of their professional journey."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} showDetails={false} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" className="gap-2">
                <span>View Full Program Details & Syllabus Structure</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE BAKKA */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Why Choose Us"
            title="Our Principles & Training Strengths"
            description="We build our learning experience on proven training principles that prioritize student understanding, actionable skills, and institutional value."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Target}
              title="Applied Learning"
              description="Every module combines conceptual grounding with hands-on exercises, simulations, and real-world task practice."
            />
            <FeatureCard
              icon={Users}
              title="Dedicated Instructors"
              description="Instructors guide participants step-by-step, providing timely feedback and personalized learning support."
            />
            <FeatureCard
              icon={Compass}
              title="Supportive Environment"
              description="Small cohorts and collaborative classrooms foster peer learning, mutual encouragement, and active participation."
            />
            <FeatureCard
              icon={Building}
              title="Custom Organizational Tracks"
              description="Flexible syllabi and capacity-building solutions customized for corporate teams, businesses, and public agencies."
            />
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / GETTING STARTED */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="How It Works"
            title="Four Simple Steps to Begin Your Training"
            description="Our straightforward onboarding process ensures you find the right training path for your personal or organizational objectives."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl border border-border p-6 relative">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Discover Offerings
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Review our training categories across professional skills, technical tools, and corporate capacity-building.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 relative">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Inquire & Consult
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Contact our team to discuss upcoming schedules, prerequisites, and the ideal curriculum for your needs.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 relative">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Hands-on Practice
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Attend interactive classroom sessions, engage in practical labs, and collaborate with peers and mentors.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 relative">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Apply in Workplace
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Implement newly acquired skills immediately in your daily tasks, studies, or organizational workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENCY & INTEGRITY NOTICE */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-xl border border-border/80 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Our Transparency & Quality Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Bakka Training Center prioritizes honesty and authentic learner value. We do not publish
                fabricated testimonials, unverified partner logos, or unrealistic career guarantees.
                All student feedback and institutional partnerships published here are verified directly with participants.
              </p>
            </div>
            <Link href="/about" className="shrink-0">
              <Button variant="outline" size="sm" className="text-xs">
                Read Center Values
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <CallToAction />
    </div>
  );
}

