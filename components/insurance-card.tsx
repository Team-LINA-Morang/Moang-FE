"use client"

import { Shield, Sparkles } from "lucide-react"

export function InsuranceCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-[1px]"
      style={{
        background: "linear-gradient(135deg, #1a1a6e, #2d2d9e, #d4a843)",
      }}
    >
      <div className="relative rounded-2xl bg-card p-8">
        {/* Badge */}
        <div className="mb-4 flex items-center gap-2">
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
            <h2 className="text-lg font-bold text-foreground">
              {"[AI 맞춤] 번지점프 원데이 안심 보험"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {"번지점프 중 발생할 수 있는 골절 및 상해를 집중 보장합니다."}
            </p>
          </div>
        </div>

        {/* Price */}
        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "rgba(26, 26, 110, 0.04)" }}
        >
          <p className="mb-1 text-xs font-medium text-muted-foreground">
            {"총 보험료"}
          </p>
          <div className="flex items-baseline gap-1">
            <span
              className="text-4xl font-extrabold tracking-tight"
              style={{ color: "#1a1a6e" }}
            >
              {"1,250"}
            </span>
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
    </div>
  )
}
