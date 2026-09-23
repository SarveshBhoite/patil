"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  showArrow?: boolean;
}

export const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant = "primary", showArrow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-text text-background hover:bg-white/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-0.5",
          variant === "secondary" &&
            "border border-white/20 bg-transparent text-text hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          )}
        </span>
        {variant === "primary" && (
          <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        )}
      </button>
    );
  }
);
HeroButton.displayName = "HeroButton";
