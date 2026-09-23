"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICE_ICONS } from "./ServiceIcons";

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isMobileExpanded: boolean;
}

export default function ServiceItem({
  id,
  title,
  description,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isMobileExpanded,
}: ServiceItemProps) {
  const Icon = SERVICE_ICONS[id] || SERVICE_ICONS["01"];

  // No mobile accordion animation needed anymore
  return (
    <div 
      className={cn(
        "group relative border-b border-white/10 py-6 md:py-10 transition-colors duration-500",
        isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 gap-6 items-center px-6">
        <div className="col-span-1 flex items-center justify-center">
          <Icon isActive={isActive} className={isActive ? "text-primary" : "text-muted"} />
        </div>
        
        <div className="col-span-1 text-sm font-mono text-muted/50 font-medium">
          {id}
        </div>
        
        <div className="col-span-4">
          <h3 className={cn(
            "text-2xl font-bold tracking-tight transition-all duration-300",
            isActive ? "text-text scale-[1.02] origin-left" : "text-muted"
          )}>
            {title}
          </h3>
        </div>
        
        <div className="col-span-5">
          <p className={cn(
            "text-sm leading-relaxed transition-all duration-500",
            isActive ? "text-text opacity-100" : "text-muted opacity-60"
          )}>
            {description}
          </p>
        </div>
        
        <div className="col-span-1 flex justify-end">
          <div className={cn(
            "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300",
            isActive ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-muted group-hover:border-white/30 group-hover:text-text"
          )}>
            <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", isActive ? "-rotate-45" : "")} />
          </div>
        </div>
      </div>

      {/* Mobile Layout (Editorial flow) */}
      <div className="md:hidden px-4 flex flex-col gap-4" onClick={onClick}>
        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
          <span className={cn(
            "text-xs font-mono transition-colors",
            isMobileExpanded ? "text-primary font-bold" : "text-muted/70"
          )}>{id}</span>
          <h3 className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isMobileExpanded ? "text-text" : "text-text/70"
          )}>
            {title}
          </h3>
        </div>
        
        <div className="flex flex-col gap-4">
          {isMobileExpanded && <Icon isActive={true} className="text-primary w-12 h-12 my-2" />}
          <p className="text-base text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {/* Subtle background glow on active (Desktop only) */}
      <div className={cn(
        "hidden md:block absolute inset-0 z-[-1] pointer-events-none transition-opacity duration-700 mix-blend-screen",
        isActive ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[100px] -translate-y-1/2 bg-primary/10 blur-[80px] rounded-full" />
      </div>
    </div>
  );
}
