"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, Shield, ArrowLeft, Clock, FileCheck } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { UserFormData } from "@/components/input-form"
import { InsuranceCard } from "@/components/insurance-card"
import { ModuleBuilder } from "@/components/module-builder"
import { PersonalizedGuide } from "@/components/personalized-guide"
import type { PersonaData } from "@/lib/persona-data"

interface InsuranceResultProps {
  formData: UserFormData
  onBack: () => void
  onApply: () => void
  persona?: PersonaData | null
  onTotalChange?: (total: number) => void
}

const LOADING_STEPS_SNS = [
  "SNS 피드를 분석하는 중...",
  "일상 속 위험 신호를 탐색하는 중...",
  "맞춤 보험을 설계하는 중...",
]

const LOADING_STEPS_DIRECT = [
  "요청하신 내용을 분석하는 중...",
  "고객의 니즈에 맞는 보험 상품 생성 중...",
  "맞춤 보험을 설계하는 중...",
]

export function InsuranceResult({ formData, onBack, onApply, persona, onTotalChange }: InsuranceResultProps) {
  const [loadingStep, setLoadingStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [customTotal, setCustomTotal] = useState(0)

  useEffect(() => {
    // Reset loading state when persona changes
    setLoadingStep(0)
    setIsLoading(true)
  }, [persona?.id])

  useEffect(() => {
    const LOADING_STEPS = formData.path === "sns" ? LOADING_STEPS_SNS : LOADING_STEPS_DIRECT
    if (loadingStep < LOADING_STEPS.length) {
      const timer = setTimeout(() => {
        setLoadingStep((prev) => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [loadingStep])

  if (isLoading) {
    const LOADING_STEPS = formData.path === "sns" ? LOADING_STEPS_SNS : LOADING_STEPS_DIRECT
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center gap-10">
          {/* AI Icon */}
          <div className="relative">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#1a1a6e" }}
            >
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div
              className="absolute -bottom-1 -right-1 h-6 w-6 animate-pulse rounded-full"
              style={{ backgroundColor: "#d4a843" }}
            />
          </div>

          {/* Title */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-foreground">
              {"AI가 맞춤 보험을 조립하고 있습니다"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {persona ? `${persona.name}님의 SNS를 분석하여 최적의 보장 모듈을 구성합니다` : "요청하신 내용을 분석하여 최적의 보장 모듈을 구성합니다"}
            </p>
          </div>

          {/* Steps */}
          <div className="flex w-full max-w-sm flex-col gap-4">
            {LOADING_STEPS.map((step, index) => {
              const isComplete = index < loadingStep
              const isCurrent = index === loadingStep
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isCurrent ? "opacity-100" : isComplete ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "#1a1a6e" }} />
                  ) : isCurrent ? (
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <div
                        className="h-4 w-4 animate-spin rounded-full border-2 border-transparent"
                        style={{ borderTopColor: "#1a1a6e", borderRightColor: "#1a1a6e" }}
                      />
                    </div>
                  ) : (
                    <div className="h-5 w-5 shrink-0 rounded-full border-2 border-border" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      isComplete || isCurrent ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Progress bar */}
          <div className="h-1 w-full max-w-sm overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                backgroundColor: "#1a1a6e",
                width: `${(loadingStep / LOADING_STEPS.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-8">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {"다시 입력하기"}
      </button>

      <AnimatePresence mode="wait">
        <motion.div 
          key={persona?.id || "default"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6"
        >
          <InsuranceCard persona={persona} customTotal={customTotal} insurancePeriod={formData.insurancePeriod} />
          
          {/* Module Builder - Replaces CoverageModules */}
          <ModuleBuilder
              persona={persona}
              onTotalChange={(total) => {
              setCustomTotal(total)
              onTotalChange?.(total)  // 추가
          }}  />
          
          <PersonalizedGuide formData={formData} persona={persona} />

          {/* Apply Button */}
          <button
            type="button"
            onClick={onApply}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl text-base font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#d4a843" }}
          >
            <FileCheck className="h-5 w-5" />
            {"청약 신청하기"}
          </button>

          {/* Timestamp */}
          <div className="flex items-center justify-center gap-1.5 pb-4 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{"데이터 업데이트: 2026.03.10 14:30 KST"}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
