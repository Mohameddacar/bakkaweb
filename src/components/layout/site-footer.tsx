import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-slate-900 text-slate-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="relative w-10 h-10 rounded-md bg-white p-0.5 overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo/logo.png"
                  alt="Bakka Training Center"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 text-xs text-amber-300 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Dedicated to Practical Skill Development</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Training Offerings */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Training Focus Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Verification Notice */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-normal">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  {siteConfig.contact.phone}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  {siteConfig.contact.email}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  {siteConfig.contact.workingHours}
                </span>
              </li>
            </ul>

            {/* Content Integrity Notice */}
            <div className="rounded bg-slate-800/80 p-2.5 border border-slate-700/80 text-[11px] text-slate-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Contact channels and verified location will be updated upon client confirmation.
              </span>
            </div>
          </div>
        </div>

        {/* Social Links & Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Official Social Channels:</span>
            {siteConfig.socialLinks.map((social) => (
              <span
                key={social.platform}
                className="text-slate-400 hover:text-slate-300 cursor-default"
                title={`${social.platform} link pending official profile URL`}
              >
                {social.platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

