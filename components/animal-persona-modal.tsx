"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Heart, Camera, Quote, Search, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import type { PersonaData } from "@/lib/persona-data"

interface AnimalPersonaModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  persona: PersonaData | null
  userName?: string
  insurancePeriod?: string
}

export function AnimalPersonaModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  persona,
  userName,
  insurancePeriod,
}: AnimalPersonaModalProps) {
  const [phase, setPhase] = useState<"loading" | "reveal">("loading")
  const [startAnimation, setStartAnimation] = useState(false)

  // Use actual user name or fallback to persona name
  const displayName = userName || persona?.name || "고객"
  const periodText = insurancePeriod || "월납"

  // Reset phase when modal opens
  useEffect(() => {
    if (isOpen) {
      setPhase("loading")
      setStartAnimation(false)
      // Small delay to ensure the modal is rendered before starting animation
      const startTimer = setTimeout(() => {
        setStartAnimation(true)
      }, 100)
      // Transition to reveal phase after animation completes
      const revealTimer = setTimeout(() => {
        setPhase("reveal")
      }, 2000) // 1.8s animation + 0.2s buffer
      return () => {
        clearTimeout(startTimer)
        clearTimeout(revealTimer)
      }
    }
  }, [isOpen])

  if (!persona) return null

  const { animal } = persona

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-h-[90vh] overflow-y-auto border-0 p-0 sm:max-w-md"
        showCloseButton={false}
        style={{ backgroundColor: "transparent" }}
      >
        <DialogTitle className="sr-only">동물 페르소나 분석 결과</DialogTitle>  {/* 추가 */}
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

                {/* Loading Text with User's Name */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    {`${displayName}님의 SNS 피드를`}
                  </h3>
                  <h3 className="text-lg font-bold text-foreground">
                    {"실시간 분석 중입니다..."}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {"AI가 피드 패턴을 분석하고 있어요"}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: "#1a1a6e" }}
                      initial={{ width: "0%" }}
                      animate={{ width: startAnimation ? "100%" : "0%" }}
                      transition={{ 
                        duration: 1.8, 
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  <motion.p 
                    className="mt-2 text-center text-sm font-medium text-muted-foreground"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {"분석 중..."}
                  </motion.p>
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
                  {`${displayName}님의 SNS 피드를 분석했어요`}
                </motion.p>
                {/* Insurance Period Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ backgroundColor: "rgba(212, 168, 67, 0.2)" }}
                >
                  <span className="text-xs font-medium text-white/90">
                    {`${periodText} 맞춤 보험`}
                  </span>
                </motion.div>
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
                      {`${displayName}님은`}
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
