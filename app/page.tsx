"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { PathSelection } from "@/components/path-selection"
import { InputForm, type UserFormData } from "@/components/input-form"
import { InsuranceResult } from "@/components/insurance-result"
import { ComplianceQuiz } from "@/components/compliance-quiz"
import { PaymentSection } from "@/components/payment-section"
import { AnimalPersonaModal } from "@/components/animal-persona-modal"
import { PERSONAS } from "@/lib/persona-data"

type ViewState = "path-selection" | "input-form" | "result" | "quiz" | "payment"

// Default persona for SNS path demonstration (봉재우 - 민첩한 다람쥐)
const DEFAULT_SNS_PERSONA = PERSONAS.find(p => p.id === "bong-jaewoo") || PERSONAS[0]

export default function Home() {
  const [view, setView] = useState<ViewState>("path-selection")
  const [selectedPath, setSelectedPath] = useState<"sns" | "direct" | null>(null)
  const [formData, setFormData] = useState<UserFormData | null>(null)
  // Modal state for SNS persona reveal
  const [showPersonaModal, setShowPersonaModal] = useState(false)
  const [customTotal, setCustomTotal] = useState(0)

  const handleSelectPath = (path: "sns" | "direct") => {
    setSelectedPath(path)
    setView("input-form")
  }

  const handleFormSubmit = (data: UserFormData) => {
    setFormData(data)
    
    // For SNS path, show the animal persona modal first
    if (data.path === "sns") {
      setShowPersonaModal(true)
    } else {
      // For direct path, go directly to result
      setView("result")
    }
  }

  const handlePersonaModalConfirm = () => {
    setShowPersonaModal(false)
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

  // Determine which persona to use for the result
  // - SNS path: use fixed default persona (봉재우)
  // - Direct path: null (uses fixed bungee jump example)
  const resultPersona = selectedPath === "sns" ? DEFAULT_SNS_PERSONA : null

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
            persona={resultPersona}
            onTotalChange={setCustomTotal}
          />
        )}
        {view === "quiz" && (
          <ComplianceQuiz
            path={formData?.path ?? "direct"}
            onComplete={handleQuizComplete}
            onBack={handleBackToResult}
          />
        )}
        {view === "payment" && (
          <PaymentSection
            path={formData?.path ?? "direct"}
            onComplete={handlePaymentComplete}
            onBack={handleBackToResult}
            insurancePeriod={formData?.insurancePeriod}
            customTotal={customTotal}
          />
        )}
      </main>

      {/* Animal Persona Modal - shows before result page for SNS path */}
      <AnimalPersonaModal
        isOpen={showPersonaModal}
        onClose={() => setShowPersonaModal(false)}
        onConfirm={handlePersonaModalConfirm}
        persona={DEFAULT_SNS_PERSONA}
        userName={formData?.name}
        insurancePeriod={formData?.insurancePeriod}
      />
    </div>
  )
}
