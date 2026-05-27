"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.instagram.com/jiliangcattery?igsh=MnFzYXlndDFkZWdw&utm_source=qr",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@jl.british.shorthair?_r=1&_t=ZT-96h8rUdkgOL",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
];

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

export function Footer() {
  return (
    <footer className="bg-brand-cream">
      <div className="container-wide section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo/jiliang_cat_logo_transparent_2x.png"
                alt="Jiliang Cattery logo"
                width={2180}
                height={2490}
                className="h-10 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-[19px] font-normal tracking-tight text-brand-charcoal">
                  JILIANG
                </span>
                <span className="text-[11px] font-light tracking-[0.3em] text-brand-slate uppercase">
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
                  {social.icon}
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
                src="/images/banner/down/DSC09563_(2).jpg"
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
