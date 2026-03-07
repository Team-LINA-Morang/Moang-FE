"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { PathSelection } from "@/components/path-selection"
import { InputForm, type UserFormData } from "@/components/input-form"
import { InsuranceResult } from "@/components/insurance-result"
import { ComplianceQuiz } from "@/components/compliance-quiz"
import { PaymentSection } from "@/components/payment-section"

type ViewState = "path-selection" | "input-form" | "result" | "quiz" | "payment"

export default function Home() {
  const [view, setView] = useState<ViewState>("path-selection")
  const [selectedPath, setSelectedPath] = useState<"sns" | "direct" | null>(null)
  const [formData, setFormData] = useState<UserFormData | null>(null)

  const handleSelectPath = (path: "sns" | "direct") => {
    setSelectedPath(path)
    setView("input-form")
  }

  const handleFormSubmit = (data: UserFormData) => {
    setFormData(data)
    setView("result")
  }

  const handleApply = () => {
    setView("quiz")
  }

  const handleQuizComplete = () => {
    setView("payment")
  }

  const handlePaymentComplete = () => {
    // Reset and go back to main
    setView("path-selection")
    setSelectedPath(null)
    setFormData(null)
  }

  const handleBackToPath = () => {
    setView("path-selection")
    setSelectedPath(null)
  }

  const handleBackToForm = () => {
    setView("input-form")
  }

  const handleBackToResult = () => {
    setView("result")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {view === "path-selection" && (
          <PathSelection onSelectPath={handleSelectPath} />
        )}
        {view === "input-form" && selectedPath && (
          <InputForm
            path={selectedPath}
            onSubmit={handleFormSubmit}
            onBack={handleBackToPath}
          />
        )}
        {view === "result" && formData && (
          <InsuranceResult
            formData={formData}
            onBack={handleBackToForm}
            onApply={handleApply}
          />
        )}
        {view === "quiz" && (
          <ComplianceQuiz
            onComplete={handleQuizComplete}
            onBack={handleBackToResult}
          />
        )}
        {view === "payment" && (
          <PaymentSection
            onComplete={handlePaymentComplete}
            onBack={handleBackToResult}
          />
        )}
      </main>
    </div>
  )
}
