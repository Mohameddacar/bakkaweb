import { Metadata } from "next";
import { Suspense } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bakka Training Center for inquiries regarding training programs, admissions, schedules, or corporate capacity-building partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. PAGE HERO */}
      <PageHero
        badge="Contact & Inquiries"
        title="Get in Touch with Bakka Training Center"
        description="Have questions about our training programs, upcoming cohorts, or corporate packages? Send us a message or reach out via our contact channels."
        breadcrumb={[{ label: "Contact" }]}
      />

      {/* 2. CONTACT CHANNELS & FORM SECTION */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Contact Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  We Are Here to Assist You
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team is available to assist prospective students, working professionals,
                  and institutional partners with training information and scheduling questions.
                </p>
              </div>

              {/* Contact Detail Cards */}
              <div className="space-y-4">
                {/* Physical Location */}
                <Card className="border-border/80">
                  <CardContent className="p-4 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Campus Location
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-border/80">
                  <CardContent className="p-4 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Phone & Messaging
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {siteConfig.contact.phone}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Available for direct calls and WhatsApp inquiries during office hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-border/80">
                  <CardContent className="p-4 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Email Desk
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {siteConfig.contact.email}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Inquiries regarding registrations, syllabus, and institutional partnerships.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Working Hours */}
                <Card className="border-border/80">
                  <CardContent className="p-4 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Center Working Hours
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder Card */}
              <div className="rounded-xl border border-dashed border-border bg-slate-50 dark:bg-slate-900 p-5 text-center space-y-2">
                <MapPin className="w-6 h-6 text-muted-foreground mx-auto" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  Interactive Campus Map
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  The verified interactive map will be embedded here as soon as the Bakka team confirms the official campus location coordinates.
                </p>
              </div>
            </div>

            {/* Right Column: Contact & Inquiry Form */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Inquiry Form
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-muted-foreground">
                  Fill in your details below and specify which program you are interested in.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="p-8 text-center text-sm text-muted-foreground rounded-xl border border-border bg-card">
                    Loading inquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ / QUICK ASSISTANCE */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Common Questions About Joining Bakka Training Center
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  How do I register for a course?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Submit an inquiry using the form above or visit the center directly during operating hours to complete registration.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  Do you provide certificates?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Course completion certificates are issued based on verified cohort attendance and practical capstone task completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

