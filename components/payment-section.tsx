"use client"

import { useState } from "react"
import { ArrowLeft, CreditCard, Shield, CheckCircle2 } from "lucide-react"

interface PaymentSectionProps {
  onComplete: () => void
  onBack: () => void
}

export function PaymentSection({ onComplete, onBack }: PaymentSectionProps) {
  const [accountNumber, setAccountNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleAccountChange = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 16)
    setAccountNumber(numeric)
  }

  const handlePayment = () => {
    if (accountNumber.length < 10) return
    
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isComplete) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(45, 138, 78, 0.1)" }}
          >
            <CheckCircle2 className="h-12 w-12" style={{ color: "#2d8a4e" }} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {"보험 가입이 완료되었습니다!"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {"가입 내용은 입력하신 이메일로 발송됩니다."}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {"추가 확인이 필요한 경우 상담원 전화가 갈 수 있습니다."}
          </p>
          <button
            type="button"
            onClick={onComplete}
            className="mt-4 flex h-14 w-full max-w-xs items-center justify-center rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1a1a6e" }}
          >
            {"확인"}
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {"돌아가기"}
      </button>

      <div className="rounded-xl bg-card p-8 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
        {/* Success Message */}
        <div
          className="mb-8 flex items-center gap-3 rounded-xl p-4"
          style={{ backgroundColor: "rgba(45, 138, 78, 0.08)" }}
        >
          <CheckCircle2 className="h-6 w-6 shrink-0" style={{ color: "#2d8a4e" }} />
          <div>
            <p className="font-semibold text-foreground">
              {"축하합니다! 퀴즈를 모두 맞추셨습니다."}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {"이제 결제를 진행해 주세요."}
            </p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5" style={{ color: "#1a1a6e" }} />
            <h2 className="text-lg font-bold text-foreground">{"결제 정보"}</h2>
          </div>

          {/* Summary */}
          <div
            className="mb-6 rounded-xl p-5"
            style={{ backgroundColor: "rgba(26, 26, 110, 0.04)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#1a1a6e" }}
                >
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {"[AI 맞춤] 원데이 안심 보험"}
                  </p>
                  <p className="text-xs text-muted-foreground">{"1일 기준"}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold" style={{ color: "#1a1a6e" }}>
                  {"1,250원"}
                </p>
              </div>
            </div>
          </div>

          {/* Account Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="account" className="text-xs font-medium text-muted-foreground">
              {"계좌번호 (숫자만 입력)"}
            </label>
            <input
              id="account"
              type="text"
              inputMode="numeric"
              placeholder="계좌번호를 입력해 주세요"
              value={accountNumber}
              onChange={(e) => handleAccountChange(e.target.value)}
              className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
            <p className="text-xs text-muted-foreground">
              {"결제 가능 은행: 국민, 신한, 우리, 하나, 농협"}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handlePayment}
          disabled={accountNumber.length < 10 || isProcessing}
          className="flex h-14 w-full items-center justify-center rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ backgroundColor: "#1a1a6e" }}
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div
                className="h-5 w-5 animate-spin rounded-full border-2 border-transparent"
                style={{ borderTopColor: "#fff", borderRightColor: "#fff" }}
              />
              {"결제 처리 중..."}
            </div>
          ) : (
            "결제하기"
          )}
        </button>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          {"결제 버튼 클릭 시 위 약관에 동의하는 것으로 간주됩니다."}
        </p>
      </div>
    </section>
  )
}
