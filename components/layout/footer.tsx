"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, Users, Music, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/our-cats", label: "Our Cats" },
  { href: "/available", label: "Available Kittens" },
  { href: "/apply", label: "Kitten Application" },
  { href: "/process", label: "Shipping & Delivery" },
  { href: "/gallery", label: "Gallery" },
];

const infoLinks = [
  { href: "/process", label: "Health Guarantee" },
  { href: "/process", label: "Payment & Policies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { href: "#", label: "Instagram", icon: Camera },
  { href: "#", label: "Facebook", icon: Users },
  { href: "#", label: "TikTok", icon: Music },
];

export function Footer() {
  return (
    <footer className="bg-brand-cream">
      <div className="container-wide section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-lg">🐱</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-lg font-bold tracking-tight text-brand-charcoal">
                  JILIANG
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-brand-slate uppercase">
                  CATTERY
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-slate">
              British Shorthair kittens of exceptional quality, raised with love and delivered with
              care.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ice-dark bg-white transition-colors hover:bg-brand-charcoal hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-brand-charcoal">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-slate transition-colors hover:text-brand-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading text-sm font-bold text-brand-charcoal">Information</h4>
            <ul className="mt-4 space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-slate transition-colors hover:text-brand-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-brand-charcoal">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-slate" />
                <a
                  href="mailto:info@jiliangcattery.com"
                  className="text-sm text-brand-slate transition-colors hover:text-brand-brass"
                >
                  info@jiliangcattery.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-slate" />
                <span className="text-sm text-brand-slate">(404) 555-0123</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-slate" />
                <span className="text-sm text-brand-slate">Atlanta, GA & Toronto, ON</span>
              </li>
            </ul>
            <Link
              href="/apply"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-brand-charcoal px-5 py-2 text-sm font-medium text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
            >
              Inquire About Kittens <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Feature Image */}
          <div className="hidden lg:block">
            <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl bg-brand-ice">
              <Image
                src="/images/cats/placeholder.svg"
                alt="British Shorthair kitten"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-brand-charcoal/60 to-transparent p-4 text-center">
                <p className="text-sm font-semibold text-white">
                  Quality. Health. Love.
                </p>
                <p className="text-xs text-white/80">That&apos;s Our Promise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-ice-dark">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-brand-slate">
            &copy; {new Date().getFullYear()} JILIANG CATTERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-brand-slate transition-colors hover:text-brand-brass">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-brand-slate transition-colors hover:text-brand-brass">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
