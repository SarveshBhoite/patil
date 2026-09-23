import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #6C2CFF, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #12D9E8, transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8 bg-[#F8F7FF] border"
          style={{ borderColor: "rgba(108,44,255,0.18)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#6C2CFF] animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-[#667085] uppercase">
            Error 404
          </span>
        </div>

        <h1 className="text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-tight leading-none mb-6">
          <span className="text-[#172033]">Page </span>
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #6C2CFF, #367CFF, #12D9E8)" }}
          >
            Not Found.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#667085] max-w-md mb-12 font-medium">
          The page you&apos;re looking for couldn&apos;t be found. Let&apos;s get you back on track.
        </p>

        <Link href="/">
          <button
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2CFF]"
            style={{
              background: "linear-gradient(135deg, #6C2CFF 0%, #367CFF 55%, #12D9E8 100%)",
              boxShadow: "0 6px 24px rgba(108,44,255,0.25)",
            }}
          >
            Return to Home
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
