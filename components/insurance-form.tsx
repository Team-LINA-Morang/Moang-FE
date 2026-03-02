"use client"

import { useState } from "react"
import { CheckCircle2, Circle } from "lucide-react"
import type { FormData } from "@/app/page"

interface InsuranceFormProps {
  onSubmit: (data: FormData) => void
}

export function InsuranceForm({ onSubmit }: InsuranceFormProps) {
  const [birthDate, setBirthDate] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [period, setPeriod] = useState("")
  const [customRequest, setCustomRequest] = useState("")

  const handleBirthDateChange = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 6)
    setBirthDate(numeric)
  }

  const handleSubmit = () => {
    onSubmit({ birthDate, gender, period, customRequest })
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="rounded-xl bg-card p-8 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
        {/* Row 1: Birth Date + Gender */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Birth Date Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="birthdate"
              className="text-xs font-medium text-muted-foreground"
            >
              {"생년월일 (6자리)"}
            </label>
            <input
              id="birthdate"
              type="text"
              inputMode="numeric"
              placeholder="001125"
              value={birthDate}
              onChange={(e) => handleBirthDateChange(e.target.value)}
              className="h-12 w-40 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
          </div>

          {/* Gender Selection */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              {"성별"}
            </span>
            <div className="flex">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`flex h-12 items-center gap-2 rounded-l-lg border px-5 text-sm font-semibold transition-colors ${
                  gender === "male"
                    ? "border-[#1a1a6e] bg-card text-foreground"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {gender === "male" ? (
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: "#1a1a6e" }}
                  />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground/40" />
                )}
                {"남자"}
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`flex h-12 items-center gap-2 rounded-r-lg border-y border-r px-5 text-sm font-semibold transition-colors ${
                  gender === "female"
                    ? "border-[#1a1a6e] bg-card text-foreground"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {gender === "female" ? (
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: "#1a1a6e" }}
                  />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground/40" />
                )}
                {"여자"}
              </button>
            </div>
          </div>

          {/* Period Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="period"
              className="text-xs font-medium text-muted-foreground"
            >
              {"보험 기간"}
            </label>
            <input
              id="period"
              type="text"
              placeholder="예: 1일, 1개월, 1년"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="h-12 w-48 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        {/* Row 2: Custom Request Text */}
        <div className="mt-6 flex flex-col gap-1.5">
          <label
            htmlFor="custom-request"
            className="text-xs font-medium text-muted-foreground"
          >
            {"어떤 보험을 만들어 드릴까요?"}
          </label>
          <textarea
            id="custom-request"
            placeholder="예: 번지점프 사고를 대비하는 보험 만들어줘"
            value={customRequest}
            onChange={(e) => setCustomRequest(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-6 flex h-14 w-full items-center justify-center rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#111111" }}
        >
          {"보험료 확인하고 가입하기"}
        </button>
      </div>
    </section>
  )
}
