import * as React from "react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const DiscoverIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className={isActive ? "animate-[spin_4s_linear_infinite] stroke-primary" : "stroke-muted opacity-50"} />
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" className={isActive ? "stroke-secondary" : "stroke-muted"} />
    <circle cx="24" cy="24" r="2" fill="currentColor" className={isActive ? "text-accent animate-pulse" : "text-muted"} />
  </svg>
);

export const StrategizeIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path d="M12 36 L20 20 L32 28 L40 12" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-1000 ease-out", isActive ? "stroke-primary" : "stroke-muted")} style={{ strokeDasharray: 100, strokeDashoffset: isActive ? 0 : 100 }} />
    <circle cx="12" cy="36" r="3" fill="currentColor" className={isActive ? "text-secondary" : "text-muted"} />
    <circle cx="20" cy="20" r="3" fill="currentColor" className={isActive ? "text-secondary transition-all delay-300" : "text-muted opacity-50"} />
    <circle cx="32" cy="28" r="3" fill="currentColor" className={isActive ? "text-secondary transition-all delay-500" : "text-muted opacity-50"} />
    <circle cx="40" cy="12" r="4" fill="currentColor" className={isActive ? "text-accent transition-all delay-700 shadow-glow" : "text-muted opacity-50"} />
  </svg>
);

export const CreateIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <rect x="12" y="12" width="10" height="10" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-500", isActive ? "stroke-primary -translate-y-2 -translate-x-2" : "stroke-muted")} />
    <circle cx="34" cy="17" r="5" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-500 delay-100", isActive ? "stroke-secondary translate-y-2 -translate-x-2" : "stroke-muted")} />
    <polygon points="17,38 22,28 12,28" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-500 delay-200", isActive ? "stroke-accent -translate-y-2 translate-x-2" : "stroke-muted")} />
    <rect x="28" y="28" width="10" height="10" rx="5" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-500 delay-300", isActive ? "stroke-primary translate-y-2 translate-x-2" : "stroke-muted")} />
  </svg>
);

export const LaunchIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path d="M24 40 L24 8" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-500", isActive ? "stroke-primary" : "stroke-muted")} style={{ strokeDasharray: 40, strokeDashoffset: isActive ? 0 : 40 }} />
    <path d="M14 18 L24 8 L34 18" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-500 delay-300", isActive ? "stroke-primary" : "stroke-muted opacity-50")} />
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" className={cn("transition-all duration-1000", isActive ? "stroke-secondary scale-150 opacity-0" : "stroke-transparent scale-50 opacity-100")} />
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" className={cn("transition-all duration-1000 delay-200", isActive ? "stroke-accent scale-150 opacity-0" : "stroke-transparent scale-50 opacity-100")} />
  </svg>
);

export const OptimizeIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path d="M8 16 C20 16 20 24 32 24 L40 24" stroke="currentColor" strokeWidth="1" className={isActive ? "stroke-secondary opacity-40" : "stroke-muted opacity-20"} />
    <path d="M8 32 C20 32 20 24 32 24 L40 24" stroke="currentColor" strokeWidth="1" className={isActive ? "stroke-secondary opacity-40" : "stroke-muted opacity-20"} />
    <path d="M8 24 L40 24" stroke="currentColor" strokeWidth="2" className={cn("transition-all duration-700", isActive ? "stroke-primary" : "stroke-muted")} style={{ strokeDasharray: 40, strokeDashoffset: isActive ? 0 : 40 }} />
    <circle cx="40" cy="24" r="3" fill="currentColor" className={isActive ? "text-accent transition-all delay-500" : "text-transparent"} />
  </svg>
);

export const ScaleIcon = ({ isActive, className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12 transition-all duration-500", className)} {...props}>
    <path d="M8 40 C 20 40, 24 16, 40 8" stroke="currentColor" strokeWidth="3" className={cn("transition-all duration-1000", isActive ? "stroke-primary" : "stroke-muted")} style={{ strokeDasharray: 60, strokeDashoffset: isActive ? 0 : 60 }} />
    <circle cx="40" cy="8" r="4" fill="currentColor" className={isActive ? "text-accent transition-all delay-700 animate-pulse" : "text-transparent"} />
    <path d="M24 24 L36 12 M28 32 L40 20 M16 32 L28 20" stroke="currentColor" strokeWidth="1" className={cn("transition-all duration-700 delay-500", isActive ? "stroke-secondary opacity-50" : "stroke-transparent")} />
  </svg>
);

export const PROCESS_ICONS: Record<string, React.FC<IconProps>> = {
  "01": DiscoverIcon,
  "02": StrategizeIcon,
  "03": CreateIcon,
  "04": LaunchIcon,
  "05": OptimizeIcon,
  "06": ScaleIcon,
};
