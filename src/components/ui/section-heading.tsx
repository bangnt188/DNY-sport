
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold animate-fade-in mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
