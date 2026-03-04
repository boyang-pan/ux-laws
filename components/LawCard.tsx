"use client"

import type { UXLaw } from "@/lib/ux-laws"

const categoryColors: Record<UXLaw["category"], string> = {
  Cognitive: "bg-zinc-100 text-zinc-500",
  Perception: "bg-zinc-100 text-zinc-500",
  Behavior: "bg-zinc-100 text-zinc-500",
  Design: "bg-zinc-100 text-zinc-500",
  Memory: "bg-zinc-100 text-zinc-500",
  Attention: "bg-zinc-100 text-zinc-500",
  Emotion: "bg-zinc-100 text-zinc-500",
}

interface LawCardProps {
  law: UXLaw
  onClick: () => void
}

export function LawCard({ law, onClick }: LawCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-xl border border-zinc-100 bg-white p-5 transition-all duration-200 hover:border-zinc-200 hover:shadow-sm hover:shadow-zinc-100 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase ${categoryColors[law.category]}`}
        >
          {law.category}
        </span>
        <span className="text-zinc-200 group-hover:text-zinc-400 transition-colors text-lg leading-none mt-0.5">
          →
        </span>
      </div>

      <h2 className="text-sm font-semibold text-zinc-900 mb-1.5 group-hover:text-zinc-700 transition-colors">
        {law.name}
      </h2>
      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
        {law.tagline}
      </p>

      {law.origin && (
        <p className="mt-3 text-[10px] text-zinc-300 font-medium">
          {law.origin}
        </p>
      )}
    </button>
  )
}
