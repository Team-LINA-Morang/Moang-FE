"use client"

import { MessageSquare, FileText } from "lucide-react"
import type { UserFormData } from "@/components/input-form"

interface PersonalizedGuideProps {
  formData: UserFormData
}

export function PersonalizedGuide({ formData }: PersonalizedGuideProps) {
  const name = formData.name || "고객"

  const getPathMessage = () => {
    if (formData.path === "sns") {
      return `${name}님의 SNS 피드를 분석한 결과, 액티브한 아웃도어 활동이 많으신 것으로 파악됩니다. 이에 맞춰 상해 및 골절 보장을 강화한 맞춤 보험을 설계했습니다.`
    }
    return `${name}님, 요청하신 내용을 바탕으로 위험 요율을 적용하여 가장 합리적인 보장 구성을 추천드립니다. ${formData.gender === "male" ? "남성" : "여성"} 기준으로 최적화되어 있습니다.`
  }

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
      {/* AI Advice */}
      <div className="flex gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: "rgba(26, 26, 110, 0.08)" }}
        >
          <MessageSquare className="h-4 w-4" style={{ color: "#1a1a6e" }} />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold" style={{ color: "#1a1a6e" }}>
            {"AI의 조언"}
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            {getPathMessage()}
          </p>
        </div>
      </div>

      {/* Detail View Button */}
      <div className="mt-6">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
          style={{ borderColor: "#d0d0d0" }}
        >
          <FileText className="h-4 w-4 text-muted-foreground" />
          {"상세 약관 보기"}
        </button>
      </div>
    </div>
  )
}
