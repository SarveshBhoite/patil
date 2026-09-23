import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up | LeadSpire Digitals",
  description: "Create an account with LeadSpire Digitals to start your growth journey.",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F8F7FF] py-24 px-6">
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #6C2CFF, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #12D9E8, transparent)" }}
        />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2CFF] rounded-lg">
            <Image
              src="/logo.png"
              alt="LeadSpire Digitals"
              width={240}
              height={80}
              priority
              className="h-[56px] w-auto mx-auto object-contain"
            />
          </Link>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_40px_rgba(108,44,255,0.08)] border border-[#E5E7F0] relative overflow-hidden">
          {/* Gradient top border */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, #6C2CFF, #367CFF, #12D9E8)" }}
          />

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#172033] mb-2">Create an Account</h1>
            <p className="text-[#667085] text-sm">Join us and accelerate your digital growth.</p>
          </div>

          <form className="flex flex-col gap-5">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-[#172033]">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-[#9AA4BD] group-focus-within:text-[#6C2CFF] transition-colors" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-white border border-[#E5E7F0] rounded-xl py-3.5 pl-11 pr-4 text-[#172033] placeholder-[#9AA4BD] focus:outline-none focus:ring-2 focus:ring-[#6C2CFF]/20 focus:border-[#6C2CFF] transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-[#172033]">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-[#9AA4BD] group-focus-within:text-[#6C2CFF] transition-colors" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white border border-[#E5E7F0] rounded-xl py-3.5 pl-11 pr-4 text-[#172033] placeholder-[#9AA4BD] focus:outline-none focus:ring-2 focus:ring-[#6C2CFF]/20 focus:border-[#6C2CFF] transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold text-[#172033]">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-[#9AA4BD] group-focus-within:text-[#6C2CFF] transition-colors" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  required
                  className="w-full bg-white border border-[#E5E7F0] rounded-xl py-3.5 pl-11 pr-4 text-[#172033] placeholder-[#9AA4BD] focus:outline-none focus:ring-2 focus:ring-[#6C2CFF]/20 focus:border-[#6C2CFF] transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full inline-flex justify-center items-center gap-2 mt-2 py-4 text-[15px] font-bold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(108,44,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2CFF] focus-visible:ring-offset-2"
              style={{
                background: "linear-gradient(135deg, #6C2CFF 0%, #367CFF 55%, #12D9E8 100%)",
                boxShadow: "0 4px 16px rgba(108,44,255,0.20)",
              }}
            >
              Create Account
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center text-sm text-[#667085]">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-[#6C2CFF] hover:text-[#367CFF] transition-colors">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
