"use client";

import NavigatingBtn from "@/components/navigatiing-btn";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sendReminder: false,
  });

  const steps = [
    {
      placeholder: "Friend's name",
      field: "name",
      type: "text",
    },
    {
      placeholder: "Friend's email",
      field: "email",
      type: "email",
    },
    {
      placeholder: "Send a reminder in 2 days",
      field: "sendReminder",
      type: "checkbox",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isLastStep = currentStep === steps.length - 1;
  const canGoBack = currentStep > 0;

  return (
    <main className="min-h-svh grid place-items-center">
      <div className="max-w-xs w-full space-y-4 p-4 -mt-[10%]">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance">Invite a friend</h1>
        <div className="relative h-10">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const isUpcoming = index > currentStep;

            let transformClass = "";
            if (isActive) {
              transformClass = "translate-y-0 scale-100 opacity-100";
            } else if (isCompleted) {
              const stepsPassed = currentStep - index;
              if (stepsPassed > 1) {
                console.log(stepsPassed, "stepsPassed");
                transformClass = "translate-y-4 scale-92 pointer-events-none";
              }
              else {
                transformClass = "translate-y-2 scale-96 pointer-events-none";
              }
            } else if (isUpcoming) {
              transformClass = "-translate-y-8 scale-110 opacity-0";
            }

            return (
              <React.Fragment key={index}>
                {step.type === "checkbox" ? (
                  <div
                    className={cn(
                      "absolute w-full flex items-center justify-between space-x-2 bg-muted border-input rounded-xl h-10 px-3 py-1 border shadow-xl",
                      "transition-all duration-400 ease",
                      transformClass,
                    )}>
                    <label htmlFor="reminder" className="text-sm text-muted-foreground">
                      {step.placeholder}
                    </label>
                    <Switch
                      id="reminder"
                      name="reminder"
                      checked={formData.sendReminder}
                      onCheckedChange={(v) => handleInputChange("sendReminder", v)}
                    />
                  </div>
                ) : (
                  <Input
                    id={step.field}
                    name={step.field}
                    autoComplete="off"
                    type={step.type as "text" | "email"}
                    placeholder={step.placeholder}
                    value={formData[step.field as keyof typeof formData] as string}
                    onChange={(e) => handleInputChange(step.field, e.target.value)}
                    className={cn(
                      "absolute h-10 transition-all duration-400 ease rounded-xl dark:bg-muted bg-muted shadow-xs",
                      transformClass,
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <NavigatingBtn
          isLastStep={isLastStep}
          canGoBack={canGoBack}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </div>
    </main>
  );
}
