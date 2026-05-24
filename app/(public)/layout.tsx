import { Toaster } from "@/components/ui/sonner";
import { LocationProvider } from "@/components/layout/location-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocationProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-50 focus:rounded focus:bg-brand-brass focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster />
    </LocationProvider>
  );
}
