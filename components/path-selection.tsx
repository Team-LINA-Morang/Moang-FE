"use client"

import { Share2, Edit3 } from "lucide-react"

interface PathSelectionProps {
  onSelectPath: (path: "sns" | "direct") => void
}

export function PathSelection({ onSelectPath }: PathSelectionProps) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-12">
      <div className="mb-8 text-center sm:mb-10">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {"나만의 맞춤 보험 만들기"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
          {"AI가 분석하여 최적의 보험을 조립해 드립니다"}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* SNS Path Card */}
        <button
          type="button"
          onClick={() => onSelectPath("sns")}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-[#1a1a6e] hover:shadow-lg sm:p-8"
        >
          <div
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16"
            style={{ backgroundColor: "rgba(26, 26, 110, 0.08)" }}
          >
            <Share2 className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: "#1a1a6e" }} />
          </div>
          <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
            {"내 SNS로 보험 만들기"}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {"SNS 피드를 AI가 분석하여 일상 속 위험 요소를 자동으로 감지하고 맞춤 보험을 추천해 드립니다."}
          </p>
          <div
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold sm:mt-6"
            style={{ color: "#1a1a6e" }}
          >
            {"시작하기"}
            <span className="transition-transform group-hover:translate-x-1">{"→"}</span>
          </div>
        </button>

        {/* Direct Path Card */}
        <button
          type="button"
          onClick={() => onSelectPath("direct")}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-[#d4a843] hover:shadow-lg sm:p-8"
        >
          <div
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16"
            style={{ backgroundColor: "rgba(212, 168, 67, 0.12)" }}
          >
            <Edit3 className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: "#d4a843" }} />
          </div>
          <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
            {"내가 직접 보험 만들기"}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {"텍스트와 사진으로 원하는 보장 내용을 직접 입력하시면 AI가 맞춤 보험을 설계해 드립니다."}
          </p>
          <div
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold sm:mt-6"
            style={{ color: "#d4a843" }}
          >
            {"시작하기"}
            <span className="transition-transform group-hover:translate-x-1">{"→"}</span>
          </div>
        </button>
      </div>
    </section>
  )
}
