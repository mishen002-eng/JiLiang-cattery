import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const stepLabels = ["About You", "Location", "Your Home", "Preferences", "References", "Review"];

interface FormProgressProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function FormProgress({ currentStep, onStepClick }: FormProgressProps) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      {stepLabels.map((label, i) => (
        <div key={label} className="flex items-center">
          <button
            type="button"
            onClick={() => i < currentStep && onStepClick(i)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-colors sm:px-3 sm:text-sm",
              i === currentStep && "bg-brand-brass text-white",
              i < currentStep &&
                "cursor-pointer bg-brand-brass/10 text-brand-brass hover:bg-brand-brass/20",
              i > currentStep && "text-brand-slate-light"
            )}
            disabled={i > currentStep}
          >
            {i < currentStep ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <span className="hidden sm:inline">{i + 1}.</span>
            )}
            <span className="hidden md:inline">{label}</span>
            <span className="md:hidden">{i + 1}</span>
          </button>
          {i < stepLabels.length - 1 && (
            <div
              className={cn(
                "mx-1 h-px w-4 sm:w-6",
                i < currentStep ? "bg-brand-brass" : "bg-brand-ice-dark"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
