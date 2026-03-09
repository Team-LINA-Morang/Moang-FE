"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Camera, Quote } from "lucide-react"
import type { AnimalAnalysis as AnimalAnalysisType } from "@/lib/persona-data"

interface AnimalAnalysisProps {
  animal: AnimalAnalysisType
  userName: string
}

export function AnimalAnalysis({ animal, userName }: AnimalAnalysisProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl bg-card p-6 shadow-sm"
      style={{ border: "1px solid #e5e5e5" }}
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-2">
        <Sparkles className="h-5 w-5" style={{ color: "#d4a843" }} />
        <h3 className="text-base font-bold text-foreground">
          {"동물 분석"}
        </h3>
      </div>

      {/* Animal Card */}
      <div
        className="overflow-hidden rounded-xl"
        style={{ background: "linear-gradient(135deg, rgba(26, 26, 110, 0.06), rgba(212, 168, 67, 0.08))" }}
      >
        {/* Title Section */}
        <div className="border-b p-5" style={{ borderColor: "rgba(26, 26, 110, 0.1)" }}>
          <div className="flex items-center gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
              style={{ backgroundColor: "rgba(26, 26, 110, 0.08)" }}
            >
              {animal.emoji}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {`${userName}님은`}
              </p>
              <h4 className="text-lg font-bold" style={{ color: "#1a1a6e" }}>
                {animal.title}
              </h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {`입니다!`}
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4 p-5">
          {/* Personality */}
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
              <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                {"성격"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground">
              {animal.personality}
            </p>
          </div>

          {/* SNS Feeds */}
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <Camera className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
              <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                {"SNS 피드"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {animal.snsFeeds}
            </p>
          </div>

          {/* Fact */}
          <div
            className="rounded-xl p-4"
            style={{ backgroundColor: "rgba(212, 168, 67, 0.12)" }}
          >
            <div className="mb-2 flex items-center gap-1.5">
              <Quote className="h-3.5 w-3.5" style={{ color: "#d4a843" }} />
              <span className="text-xs font-semibold" style={{ color: "#d4a843" }}>
                {"한 줄 팩트"}
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed" style={{ color: "#1a1a6e" }}>
              {`"${animal.fact}"`}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
