"use client"

import { useState } from "react"
import { uxLaws, categories } from "@/lib/ux-laws"
import type { UXLaw } from "@/lib/ux-laws"
import { LawCard } from "@/components/LawCard"
import { LawDetail } from "@/components/LawDetail"

export default function Home() {
  const [selected, setSelected] = useState<UXLaw | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered =
    activeCategory === "All"
      ? uxLaws
      : uxLaws.filter((l) => l.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
              UX Laws
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              {uxLaws.length} principles that shape how people experience products
            </p>
          </div>
          {/* Category filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((law) => (
            <LawCard key={law.id} law={law} onClick={() => setSelected(law)} />
          ))}
        </div>
      </main>

      {/* Detail panel */}
      {selected && (
        <LawDetail law={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
