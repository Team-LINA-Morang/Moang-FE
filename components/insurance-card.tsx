"use client"

import { motion } from "framer-motion"
import { Shield, Sparkles } from "lucide-react"
import type { PersonaData, DEFAULT_DIRECT_PRODUCT } from "@/lib/persona-data"

interface InsuranceCardProps {
  persona?: PersonaData | null
  customTotal?: number
}

const defaultProduct = {
  name: "[AI 맞춤] 번지점프 원데이 안심 보험",
  description: "번지점프 중 발생할 수 있는 골절 및 상해를 집중 보장합니다.",
  price: "1,250",
}

export function InsuranceCard({ persona, customTotal }: InsuranceCardProps) {
  const product = persona?.product || defaultProduct
  const displayPrice = customTotal ? customTotal.toLocaleString() : product.price

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl p-[1px]"
      style={{
        background: "linear-gradient(135deg, #1a1a6e, #2d2d9e, #d4a843)",
      }}
    >
      <div className="relative rounded-2xl bg-card p-6 sm:p-8">
        {/* Badge */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: "#1a1a6e" }}
          >
            <Sparkles className="h-3 w-3" />
            {"AI 맞춤 설계"}
          </span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {"원데이"}
          </span>
          {persona && (
            <span 
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: "rgba(212, 168, 67, 0.15)", color: "#d4a843" }}
            >
              {persona.category}
            </span>
          )}
        </div>

        {/* Product Name */}
        <div className="mb-6 flex items-start gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: "#1a1a6e" }}
          >
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <motion.h2
              key={product.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-base font-bold text-foreground sm:text-lg"
            >
              {product.name}
            </motion.h2>
            <motion.p
              key={product.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-1 text-sm text-muted-foreground"
            >
              {product.description}
            </motion.p>
          </div>
        </div>

        {/* Price */}
        <div
          className="rounded-xl p-4 sm:p-5"
          style={{ backgroundColor: "rgba(26, 26, 110, 0.04)" }}
        >
          <p className="mb-1 text-xs font-medium text-muted-foreground">
            {"총 보험료"}
          </p>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={displayPrice}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: "#1a1a6e" }}
            >
              {displayPrice}
            </motion.span>
            <span
              className="text-lg font-bold"
              style={{ color: "#1a1a6e" }}
            >
              {"원"}
            </span>
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {"1일 기준 / 부가세 포함"}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
