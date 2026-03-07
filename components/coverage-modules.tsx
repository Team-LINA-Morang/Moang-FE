"use client"

import { useState } from "react"
import { CheckCircle2, ShieldCheck, ChevronDown, FileText } from "lucide-react"

const MODULES = [
  {
    name: "상해사망",
    amount: "5,000만원",
    description: "번지점프 중 사고로 인한 사망 보장",
    details: {
      coverage: "상해 사고로 사망 시 가입금액 5,000만원 지급.",
      exclusions: "피보험자의 고의, 자해, 형법상 범죄행위, 전문적인 등반이나 번지점프 등을 직업적으로 하는 동안의 사고는 제외됩니다. (단, 본 상품은 원데이 레저 특약으로 번지점프를 명시적으로 보장함)",
      claimDocs: "사망진단서, 사고 증명서류, 수익자 신분증 사본",
    },
  },
  {
    name: "골절진단비",
    amount: "50만원",
    description: "낙상/충격으로 인한 골절 진단 시 지급",
    details: {
      coverage: "상해로 골절(치아파절 제외) 진단 시 회당 50만원 지급.",
      exclusions: "치아, 치조골의 골절 및 병적 골절(골다공증으로 인한 골절 등)은 보장하지 않습니다.",
      claimDocs: "골절 진단서, 의료비 영수증, 신분증 사본",
    },
  },
  {
    name: "응급실 내원비",
    amount: "3만원",
    description: "사고 후 응급실 방문 시 실비 지급",
    details: {
      coverage: "상해로 응급실 내원하여 진료를 받은 경우 내원 1회당 3만원 지급.",
      exclusions: "단순 검진 목적의 응급실 방문, 음주 상태에서의 사고는 제외됩니다.",
      claimDocs: "응급실 진료 기록부, 의료비 영수증, 신분증 사본",
    },
  },
]

export function CoverageModules() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  const toggleModule = (name: string) => {
    setExpandedModule(expandedModule === name ? null : name)
  }

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5" style={{ color: "#1a1a6e" }} />
        <h3 className="text-base font-bold text-foreground">
          {"보장 모듈 구성"}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {MODULES.map((module) => {
          const isExpanded = expandedModule === module.name
          return (
            <div
              key={module.name}
              className="overflow-hidden rounded-xl border border-border transition-all"
            >
              <button
                type="button"
                onClick={() => toggleModule(module.name)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
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
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-sm font-bold text-foreground">
                    {module.amount}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div
                  className="border-t border-border p-4"
                  style={{ backgroundColor: "rgba(26, 26, 110, 0.02)" }}
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="mb-1.5 flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
                        <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                          {"보장 내용"}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-foreground">
                        {module.details.coverage}
                      </p>
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-destructive" />
                        <span className="text-xs font-semibold text-destructive">
                          {"보장 제외 사항"}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-foreground">
                        {module.details.exclusions}
                      </p>
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold text-muted-foreground">
                          {"청구 서류"}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {module.details.claimDocs}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
