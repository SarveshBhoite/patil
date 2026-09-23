import * as React from "react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const StrategyIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path 
      d="M8 40 L20 28 L28 32 L40 16" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={cn("transition-all duration-700 ease-out", isActive ? "stroke-primary" : "stroke-muted")}
      style={{ strokeDasharray: 60, strokeDashoffset: isActive ? 0 : 60 }}
    />
    <circle cx="40" cy="16" r="4" fill={isActive ? "#7C3AED" : "currentColor"} className="transition-colors duration-500 delay-300" />
    <circle cx="8" cy="40" r="2" fill="currentColor" />
  </svg>
);

export const SocialIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" className={cn("transition-colors duration-500", isActive ? "stroke-secondary" : "stroke-muted")} />
    <circle cx="12" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="36" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
    <path 
      d="M15 19 L21 21 M33 19 L27 21 M24 36 L24 32" 
      stroke="currentColor" 
      strokeWidth="1.5"
      className={cn("transition-all duration-500", isActive ? "stroke-secondary opacity-100" : "opacity-30")}
    />
  </svg>
);

export const PerformanceIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <rect x="8" y="32" width="6" height="8" rx="1" fill="currentColor" className="opacity-40" />
    <rect x="21" y="22" width="6" height="18" rx="1" fill="currentColor" className="opacity-60" />
    <rect 
      x="34" 
      y={isActive ? "12" : "24"} 
      width="6" 
      height={isActive ? "28" : "16"} 
      rx="1" 
      fill={isActive ? "#22D3EE" : "currentColor"} 
      className="transition-all duration-700 ease-out" 
    />
  </svg>
);

export const LeadGenIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path 
      d="M8 12 L40 12 L28 28 L28 40 L20 40 L20 28 Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinejoin="round"
      className={cn("transition-colors duration-500", isActive ? "stroke-primary" : "stroke-muted")}
    />
    <circle 
      cx="24" 
      cy={isActive ? "34" : "16"} 
      r="2" 
      fill={isActive ? "#22D3EE" : "currentColor"} 
      className="transition-all duration-700 ease-in-out opacity-0"
      style={{ opacity: isActive ? 1 : 0 }}
    />
  </svg>
);

export const WebDevIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <rect 
      x="6" 
      y="12" 
      width="36" 
      height="24" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2"
      className={cn("transition-colors duration-500", isActive ? "stroke-secondary" : "stroke-muted")}
    />
    <path d="M6 20 L42 20" stroke="currentColor" strokeWidth="2" className="opacity-50" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    <circle cx="18" cy="16" r="1.5" fill="currentColor" />
    <rect 
      x="12" 
      y="26" 
      width={isActive ? "24" : "12"} 
      height="4" 
      rx="1" 
      fill={isActive ? "#7C3AED" : "currentColor"} 
      className="transition-all duration-700 ease-out opacity-60" 
    />
  </svg>
);

export const BrandingIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path 
      d="M24 8 L40 36 L8 36 Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      className={cn("transition-all duration-700", isActive ? "stroke-primary" : "stroke-muted")}
      style={{ transform: isActive ? "rotate(10deg)" : "rotate(0deg)", transformOrigin: "center" }}
    />
    <circle 
      cx="24" 
      cy="26" 
      r="6" 
      stroke="currentColor" 
      strokeWidth="2" 
      className={isActive ? "stroke-accent" : "stroke-muted"}
    />
  </svg>
);

export const SERVICE_ICONS: Record<string, React.FC<IconProps>> = {
  "01": StrategyIcon,
  "02": SocialIcon,
  "03": PerformanceIcon,
  "04": LeadGenIcon,
  "05": WebDevIcon,
  "06": BrandingIcon,
};
