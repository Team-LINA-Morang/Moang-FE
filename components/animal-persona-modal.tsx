"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Heart, Camera, Quote, Search, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import type { PersonaData } from "@/lib/persona-data"

interface AnimalPersonaModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  persona: PersonaData | null
}

export function AnimalPersonaModal({ isOpen, onClose, onConfirm, persona }: AnimalPersonaModalProps) {
  const [phase, setPhase] = useState<"loading" | "reveal">("loading")
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Reset phase when modal opens
  useEffect(() => {
    if (isOpen) {
      setPhase("loading")
      setLoadingProgress(0)
    }
  }, [isOpen])

  // Loading animation
  useEffect(() => {
    if (isOpen && phase === "loading") {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setPhase("reveal"), 300)
            return 100
          }
          return prev + 2
        })
      }, 40)
      return () => clearInterval(interval)
    }
  }, [isOpen, phase])

  if (!persona) return null

  const { animal } = persona

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-h-[90vh] overflow-y-auto border-0 p-0 sm:max-w-md"
        showCloseButton={false}
        style={{ backgroundColor: "transparent" }}
      >
        <AnimatePresence mode="wait">
          {phase === "loading" ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-card p-8"
              style={{ border: "1px solid #e5e5e5" }}
            >
              <div className="flex flex-col items-center gap-6">
                {/* Animated Icon */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(26, 26, 110, 0.08)" }}
                  >
                    <Search className="h-10 w-10" style={{ color: "#1a1a6e" }} />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#d4a843" }}
                  >
                    <Sparkles className="h-4 w-4 text-white" />
                  </motion.div>
                </div>

                {/* Loading Text */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    {"사용자의 SNS를 분석 중입니다..."}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {"AI가 피드 패턴을 분석하고 있어요"}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: "#1a1a6e", width: `${loadingProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    {`${loadingProgress}%`}
                  </p>
                </div>

                {/* Loading Indicator */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{"페르소나 매칭 중..."}</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl bg-card"
              style={{ border: "1px solid #e5e5e5" }}
            >
              {/* Header with Celebration */}
              <div 
                className="rounded-t-2xl p-6 text-center"
                style={{ background: "linear-gradient(135deg, #1a1a6e 0%, #2d2d8a 100%)" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <Sparkles className="mx-auto h-8 w-8 text-white/80" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg font-bold text-white"
                >
                  {"AI 동물 페르소나 분석 결과"}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-1 text-sm text-white/70"
                >
                  {`${persona.name}님의 SNS 피드를 분석했어요`}
                </motion.p>
              </div>

              {/* Animal Result Card */}
              <div className="p-5">
                {/* Animal Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-5 flex items-center gap-4 rounded-xl p-4"
                  style={{ backgroundColor: "rgba(212, 168, 67, 0.08)" }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
                    style={{ backgroundColor: "rgba(26, 26, 110, 0.1)" }}
                  >
                    {animal.emoji}
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground">
                      {`${persona.name}님은`}
                    </p>
                    <h4 className="text-lg font-bold" style={{ color: "#1a1a6e" }}>
                      {animal.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{"입니다!"}</p>
                  </div>
                </motion.div>

                {/* Details */}
                <div className="flex flex-col gap-4">
                  {/* Personality */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="mb-2 flex items-center gap-1.5">
                      <Heart className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
                      <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                        {"성격"}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">
                      {animal.personality}
                    </p>
                  </motion.div>

                  {/* SNS Feeds */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="mb-2 flex items-center gap-1.5">
                      <Camera className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
                      <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                        {"SNS 피드 특징"}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {animal.snsFeeds}
                    </p>
                  </motion.div>

                  {/* Fact */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
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
              </div>

              {/* CTA Button */}
              <div className="border-t p-5" style={{ borderColor: "#e5e5e5" }}>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  type="button"
                  onClick={onConfirm}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl text-base font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#d4a843" }}
                >
                  <Sparkles className="h-5 w-5" />
                  {"나의 맞춤 보험 확인하기"}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
