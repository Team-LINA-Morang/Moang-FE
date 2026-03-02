"use client"

import { MessageSquare, FileText } from "lucide-react"
import type { FormData } from "@/app/page"

interface PersonalizedGuideProps {
  formData: FormData
}

export function PersonalizedGuide({ formData }: PersonalizedGuideProps) {
  const name = "석현"

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
      {/* AI Advice */}
      <div className="mb-6 flex gap-3">
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
            {`${name}님, 번지점프는 낙상 위험이 높기 때문에 골절 진단비를 일반 보험보다 2배 높게 설정했습니다. ${formData.gender === "male" ? "남성" : "여성"} 기준으로 위험 요율을 적용했으며, 가장 합리적인 보장 구성을 추천드립니다.`}
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1a1a6e" }}
        >
          {"지금 바로 가입하기"}
        </button>
        <button
          type="button"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
          style={{ borderColor: "#d0d0d0" }}
        >
          <FileText className="h-4 w-4 text-muted-foreground" />
          {"상세 약관 보기"}
        </button>
      </div>
    </div>
  )
}
