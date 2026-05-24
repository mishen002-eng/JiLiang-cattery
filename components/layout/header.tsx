"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Award, HeartPulse, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLocation, type Location } from "./location-provider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Our Cats",
    href: "/our-cats",
    children: [
      { href: "/our-cats", label: "Queens & Kings" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    label: "Kittens",
    href: "/available",
    children: [
      { href: "/available", label: "Available Kittens" },
      { href: "/apply", label: "Kitten Application" },
    ],
  },
  {
    label: "Information",
    href: "/process",
    children: [
      { href: "/process", label: "Adoption Process" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

const trustBarItems = [
  { icon: Award, label: "CFA & TICA Show Quality" },
  { icon: HeartPulse, label: "Health Tested Parents" },
  { icon: Globe, label: "Worldwide Delivery" },
];

function LocationSwitcher({ className }: { className?: string }) {
  const { location, setLocation } = useLocation();

  return (
    <div className={cn("flex rounded-full bg-brand-ice p-1 text-sm", className)}>
      <button
        onClick={() => setLocation("atlanta")}
        className={cn(
          "cursor-pointer rounded-full px-3 py-1 transition-colors",
          location === "atlanta"
            ? "bg-brand-charcoal text-white"
            : "text-brand-slate hover:text-brand-charcoal"
        )}
      >
        Atlanta 🇺🇸
      </button>
      <button
        onClick={() => setLocation("toronto")}
        className={cn(
          "cursor-pointer rounded-full px-3 py-1 transition-colors",
          location === "toronto"
            ? "bg-brand-charcoal text-white"
            : "text-brand-slate hover:text-brand-charcoal"
        )}
      >
        Toronto 🇨🇦
      </button>
    </div>
  );
}

function NavDropdown({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-brass"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="min-w-[180px] rounded-xl border border-brand-ice-dark bg-white p-2 shadow-lg">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-lg px-3 py-2 text-sm text-brand-slate transition-colors hover:bg-brand-cream hover:text-brand-charcoal"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Trust Bar */}
      <div className="border-b border-brand-ice-dark bg-brand-cream">
        <div className="container-wide flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            {trustBarItems.map((item) => (
              <div key={item.label} className="hidden items-center gap-1.5 sm:flex">
                <item.icon className="h-3.5 w-3.5 text-brand-slate" />
                <span className="text-xs text-brand-slate">{item.label}</span>
              </div>
            ))}
          </div>
          <LocationSwitcher />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-brand-ice-dark bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container-wide flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream">
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <NavDropdown
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  children={link.children}
                />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-brass"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              className="hidden rounded-full bg-brand-charcoal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-charcoal/90 md:inline-flex md:items-center md:gap-1.5"
            >
              Inquire About Kittens
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <div className="lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <span className="cursor-pointer p-2 text-brand-charcoal" aria-label="Open menu">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </span>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 bg-white">
                  <SheetTitle className="font-heading text-lg font-bold text-brand-charcoal">
                    Menu
                  </SheetTitle>
                  <div className="mt-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <div key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="text-lg font-medium text-brand-charcoal transition-colors hover:text-brand-brass"
                        >
                          {link.label}
                        </Link>
                        {"children" in link && link.children && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="text-sm text-brand-slate transition-colors hover:text-brand-brass"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <Link
                      href="/apply"
                      onClick={() => setOpen(false)}
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-charcoal px-5 py-2.5 text-sm font-medium text-white"
                    >
                      Inquire About Kittens &rarr;
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
