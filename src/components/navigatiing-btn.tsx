import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface NavigatingBtnProps {
  isLastStep: boolean;
  canGoBack: boolean;
  handleNext: () => void;
  handleBack: () => void;
}

export default function NavigatingBtn({ isLastStep, canGoBack, handleNext, handleBack }: NavigatingBtnProps) {
  return (
    <div className="flex items-center justify-between gap-2 text-center *:cursor-pointer pt-2">
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "size-8 rounded-full transition-all duration-200",
          { "opacity-100 scale-100": canGoBack },
          { "opacity-0 scale-0 pointer-events-none": !canGoBack },
        )}
        onClick={handleBack}
      >
        <ArrowLeft />
      </Button>

      <Button
        className="rounded-full transition-all duration-300"
        onClick={handleNext}
        disabled={isLastStep}
      >
        {isLastStep ? (
          <>
            <Check />
            Done
          </>
        ) : (
          <>
            Next
            <ArrowRight />
          </>
        )}
      </Button>
    </div>
  );
}
