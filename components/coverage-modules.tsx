"use client"

import { CheckCircle2, ShieldCheck } from "lucide-react"

const MODULES = [
  {
    name: "상해사망",
    amount: "5,000만원",
    description: "번지점프 중 사고로 인한 사망 보장",
  },
  {
    name: "골절진단비",
    amount: "50만원",
    description: "낙상/충격으로 인한 골절 진단 시 지급",
  },
  {
    name: "응급실 내원비",
    amount: "3만원",
    description: "사고 후 응급실 방문 시 실비 지급",
  },
]

export function CoverageModules() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5" style={{ color: "#1a1a6e" }} />
        <h3 className="text-base font-bold text-foreground">
          {"보장 모듈 구성"}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {MODULES.map((module) => (
          <div
            key={module.name}
            className="flex items-center justify-between rounded-xl border border-border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "#1a1a6e" }} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {module.name}
                  </span>
                  <span
                    className="rounded px-1.5 py-0.5 text-[10px] font-medium text-white"
                    style={{ backgroundColor: "#2d8a4e" }}
                  >
                    {"승인완료"}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-sm font-bold text-foreground">
              {module.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
