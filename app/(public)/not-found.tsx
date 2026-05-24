import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-brand-cream section-padding">
      <div className="text-center">
        <div className="text-6xl">🐱</div>
        <h1 className="mt-4 text-4xl">Page Not Found</h1>
        <p className="mt-4 max-w-md text-brand-slate">
          This page seems to have wandered off like a curious kitten. Let us help you find your way
          back.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            render={<Link href="/" />}
            className="bg-brand-brass hover:bg-brand-brass-dark"
          >
            Go Home
          </Button>
          <Button
            render={<Link href="/available" />}
            variant="outline"
            className="border-brand-brass text-brand-brass hover:bg-brand-brass hover:text-white"
          >
            Browse Kittens
          </Button>
        </div>
      </div>
    </section>
  );
}
