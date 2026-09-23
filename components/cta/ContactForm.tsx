"use client";

import { useState, useCallback } from "react";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  goal: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  services?: string;
  goal?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    services: [],
    goal: "",
    budget: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service.";
    }

    if (!formData.goal.trim()) {
      newErrors.goal = "Tell us about your goal.";
    } else if (formData.goal.trim().length < 10) {
      newErrors.goal = "Please provide a bit more detail.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ---- SUBMISSION LOGIC PLACEHOLDER ----
    // Replace this block with your API call, webhook, or email service.
    // Example:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    console.log("[ContactForm] Form data ready for submission:", formData);
    // ---- END PLACEHOLDER ----

    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  // ---- SUCCESS STATE ----
  if (isSubmitted) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-8">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-4">
          SIGNAL RECEIVED.
        </h3>
        <p className="text-muted max-w-md leading-relaxed">
          Thanks — we&apos;ve got your brief. We&apos;ll review the information and get back to you shortly.
        </p>
      </div>
    );
  }

  // ---- FORM ----
  return (
    <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-8">
      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="name"
          label="NAME"
          required
          value={formData.name}
          onChange={(v) => handleChange("name", v)}
          error={errors.name}
          placeholder="Your name"
        />
        <FormField
          id="email"
          label="WORK EMAIL"
          type="email"
          required
          value={formData.email}
          onChange={(v) => handleChange("email", v)}
          error={errors.email}
          placeholder="you@company.com"
        />
      </div>

      {/* Row: Company + Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="company"
          label="COMPANY"
          value={formData.company}
          onChange={(v) => handleChange("company", v)}
          placeholder="Your company"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-xs font-mono text-muted uppercase tracking-widest">
            BUDGET RANGE
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-text text-base focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-muted">Select budget</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-background text-text">{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Selection */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label className="text-xs font-mono text-muted uppercase tracking-widest">
            WHAT DO YOU NEED? <span className="text-primary">*</span>
          </label>
        </div>
        <div className="flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = formData.services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isSelected
                    ? "bg-primary/20 border-primary/50 text-text"
                    : "bg-transparent border-white/10 text-muted hover:border-white/30 hover:text-text"
                )}
              >
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="text-sm text-red-400 mt-1" role="alert">{errors.services}</p>
        )}
      </div>

      {/* Goal */}
      <div className="flex flex-col gap-2">
        <label htmlFor="goal" className="text-xs font-mono text-muted uppercase tracking-widest">
          TELL US ABOUT YOUR GOAL <span className="text-primary">*</span>
        </label>
        <textarea
          id="goal"
          rows={4}
          value={formData.goal}
          onChange={(e) => handleChange("goal", e.target.value)}
          placeholder="Where are you now? Where do you want to go?"
          className={cn(
            "w-full bg-transparent border rounded-xl px-4 py-3 text-text text-base resize-none focus:outline-none transition-all duration-300",
            errors.goal
              ? "border-red-400/50 focus:border-red-400/80"
              : "border-white/10 focus:border-primary/50 focus:shadow-[0_0_20px_rgba(124,58,237,0.1)]"
          )}
        />
        {errors.goal && (
          <p className="text-sm text-red-400 mt-1" role="alert">{errors.goal}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group relative w-full md:w-auto md:self-start px-10 py-4 bg-primary text-text font-bold text-sm uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          SEND BRIEF
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>
    </form>
  );
}

// ---- Reusable text input field ----

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

function FormField({ id, label, type = "text", required, value, onChange, error, placeholder }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-mono text-muted uppercase tracking-widest">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full bg-transparent border rounded-xl px-4 py-3 text-text text-base focus:outline-none transition-all duration-300",
          error
            ? "border-red-400/50 focus:border-red-400/80"
            : "border-white/10 focus:border-primary/50 focus:shadow-[0_0_20px_rgba(124,58,237,0.1)]"
        )}
      />
      {error && (
        <p className="text-sm text-red-400 mt-1" role="alert">{error}</p>
      )}
    </div>
  );
}
