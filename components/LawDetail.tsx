"use client"

import { useEffect } from "react"
import type { UXLaw } from "@/lib/ux-laws"

interface LawDetailProps {
  law: UXLaw
  onClose: () => void
}

export function LawDetail({ law, onClose }: LawDetailProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white border-l border-zinc-100 shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-zinc-100 px-7 py-5 flex items-start justify-between gap-4 z-10">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-zinc-100 text-zinc-500">
                {law.category}
              </span>
              {law.origin && (
                <span className="text-[10px] text-zinc-300 font-medium">
                  {law.origin}
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 leading-snug">
              {law.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center justify-center text-zinc-400 hover:text-zinc-600 cursor-pointer"
            aria-label="Close"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-7 space-y-8">
          {/* Tagline */}
          <p className="text-base font-medium text-zinc-700 leading-relaxed border-l-2 border-zinc-200 pl-4">
            {law.tagline}
          </p>

          {/* Description */}
          <section>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-300 mb-3">
              The Law
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {law.description}
            </p>
          </section>

          {/* Examples */}
          <section>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-300 mb-4">
              How to Apply It
            </h3>
            <div className="space-y-4">
              {law.examples.map((example, i) => (
                <div key={i} className="rounded-lg bg-zinc-50 border border-zinc-100 p-4">
                  <p className="text-xs font-semibold text-zinc-900 mb-1.5">
                    {example.title}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {example.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* User Impact */}
          <section>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-zinc-300 mb-3">
              User Impact
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {law.userImpact}
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
