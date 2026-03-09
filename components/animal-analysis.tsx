"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Camera, Quote } from "lucide-react"
import type { PersonaData } from "@/lib/persona-data"

interface AnimalAnalysisProps {
  persona: PersonaData
}

export function AnimalAnalysis({ persona }: AnimalAnalysisProps) {
  const { animal } = persona

  return (
    <motion.div
      key={persona.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl bg-card p-5 shadow-sm sm:p-6"
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
      <motion.div
        key={`animal-${persona.id}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-xl"
        style={{ background: "linear-gradient(135deg, rgba(26, 26, 110, 0.06), rgba(212, 168, 67, 0.08))" }}
      >
        {/* Title Section */}
        <div className="border-b p-4 sm:p-5" style={{ borderColor: "rgba(26, 26, 110, 0.1)" }}>
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl sm:h-16 sm:w-16 sm:text-3xl"
              style={{ backgroundColor: "rgba(26, 26, 110, 0.08)" }}
            >
              {animal.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">
                {`${persona.name}님은`}
              </p>
              <h4 className="text-base font-bold sm:text-lg" style={{ color: "#1a1a6e" }}>
                {animal.title}
              </h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {`입니다!`}
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          {/* Personality */}
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
              <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                {"성격"}
              </span>
            </div>
            <motion.p 
              key={`personality-${persona.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm leading-relaxed text-foreground"
            >
              {animal.personality}
            </motion.p>
          </div>

          {/* SNS Feeds */}
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <Camera className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
              <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                {"SNS 피드"}
              </span>
            </div>
            <motion.p 
              key={`feeds-${persona.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {animal.snsFeeds}
            </motion.p>
          </div>

          {/* Fact */}
          <motion.div
            key={`fact-${persona.id}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
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
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
