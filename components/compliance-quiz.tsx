"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

interface QuizItem {
  id: number
  question: string
  correctAnswer: boolean
}

const QUIZ_ITEMS: QuizItem[] = [
  {
    id: 1,
    question: "음주 후 발생한 사고는 보장되지 않음을 인지하셨나요?",
    correctAnswer: true,
  },
  {
    id: 2,
    question: "고의로 인한 사고는 보험금 지급 대상에서 제외됨을 인지하셨나요?",
    correctAnswer: true,
  },
  {
    id: 3,
    question: "보험 가입 후 바로 효력이 발생하며, 대기 기간이 없음을 확인하셨나요?",
    correctAnswer: true,
  },
  {
    id: 4,
    question: "보험금 청구 시 필요한 서류(진단서, 영수증 등)를 준비해야 함을 인지하셨나요?",
    correctAnswer: true,
  },
  {
    id: 5,
    question: "본 보험의 보장 기간과 보장 내용을 충분히 이해하셨나요?",
    correctAnswer: true,
  },
]

interface ComplianceQuizProps {
  onComplete: () => void
  onBack: () => void
}

export function ComplianceQuiz({ onComplete, onBack }: ComplianceQuizProps) {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleAnswer = (id: number, answer: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }))
    setShowError(false)
  }

  const handleSubmit = () => {
    const allAnswered = QUIZ_ITEMS.every((item) => answers[item.id] !== undefined && answers[item.id] !== null)
    if (!allAnswered) {
      setShowError(true)
      return
    }

    const allCorrect = QUIZ_ITEMS.every((item) => answers[item.id] === item.correctAnswer)
    if (allCorrect) {
      setSubmitted(true)
      setTimeout(() => {
        onComplete()
      }, 1500)
    } else {
      setShowError(true)
    }
  }

  const allCorrect = QUIZ_ITEMS.every((item) => answers[item.id] === item.correctAnswer)
  const allAnswered = QUIZ_ITEMS.every((item) => answers[item.id] !== undefined && answers[item.id] !== null)

  if (submitted && allCorrect) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(45, 138, 78, 0.1)" }}
          >
            <CheckCircle2 className="h-10 w-10" style={{ color: "#2d8a4e" }} />
          </div>
          <h2 className="text-xl font-bold text-foreground">
            {"축하합니다! 퀴즈를 모두 맞추셨습니다."}
          </h2>
          <p className="text-sm text-muted-foreground">
            {"잠시 후 결제 화면으로 이동합니다..."}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        {"돌아가기"}
      </button>

      <div className="rounded-xl bg-card p-5 shadow-sm sm:p-8" style={{ border: "1px solid #e5e5e5" }}>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground">
            {"보험 가입 적정성 확인 퀴즈"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {"정확한 가입을 위해 아래 5개의 퀴즈를 풀어주세요."}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {QUIZ_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="rounded-xl border border-border p-4 transition-colors sm:p-5"
              style={{
                borderColor: answers[item.id] !== undefined && answers[item.id] !== null ? "#1a1a6e" : undefined,
              }}
            >
              <p className="mb-3 text-sm font-medium text-foreground sm:mb-4">
                <span className="mr-2 font-bold" style={{ color: "#1a1a6e" }}>
                  {`Q${index + 1}.`}
                </span>
                {item.question}
              </p>
              <div className="flex gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => handleAnswer(item.id, true)}
                  className={`flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg border text-sm font-semibold transition-all sm:h-11 sm:gap-2 ${
                    answers[item.id] === true
                      ? "border-[#1a1a6e] bg-[#1a1a6e] text-white"
                      : "border-border bg-card text-foreground hover:bg-muted/50"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {"예 (O)"}
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer(item.id, false)}
                  className={`flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg border text-sm font-semibold transition-all sm:h-11 sm:gap-2 ${
                    answers[item.id] === false
                      ? "border-destructive bg-destructive text-white"
                      : "border-border bg-card text-foreground hover:bg-muted/50"
                  }`}
                >
                  <XCircle className="h-4 w-4" />
                  {"아니오 (X)"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {showError && (
          <div
            className="mt-6 flex items-center gap-2 rounded-lg p-4"
            style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
          >
            <AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />
            <p className="text-sm text-destructive">
              {!allAnswered
                ? "모든 질문에 답변해 주세요."
                : "일부 답변이 올바르지 않습니다. 다시 확인해 주세요."}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-6 flex h-14 w-full items-center justify-center rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1a1a6e" }}
        >
          {"제출하기"}
        </button>
      </div>
    </section>
  )
}
