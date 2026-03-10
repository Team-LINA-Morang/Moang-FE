"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { PathSelection } from "@/components/path-selection"
import { InputForm, type UserFormData } from "@/components/input-form"
import { InsuranceResult } from "@/components/insurance-result"
import { ComplianceQuiz } from "@/components/compliance-quiz"
import { PaymentSection } from "@/components/payment-section"
import { PersonaSelector } from "@/components/persona-selector"
import { PERSONAS, type PersonaData } from "@/lib/persona-data"

type ViewState = "path-selection" | "input-form" | "result" | "quiz" | "payment"

export default function Home() {
  const [view, setView] = useState<ViewState>("path-selection")
  const [selectedPath, setSelectedPath] = useState<"sns" | "direct" | null>(null)
  const [formData, setFormData] = useState<UserFormData | null>(null)
  // Persona is only used for SNS path
  const [selectedPersona, setSelectedPersona] = useState<PersonaData | null>(null)

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
    setSelectedPersona(null)
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

  // Persona selection only affects SNS path - does NOT auto-navigate
  const handlePersonaSelect = (personaId: string) => {
    const persona = PERSONAS.find(p => p.id === personaId) || null
    setSelectedPersona(persona)
    
    // If we're in result view with SNS path, update form data with persona info
    if (persona && view === "result" && selectedPath === "sns" && formData) {
      setFormData({
        ...formData,
        name: persona.name,
        snsId: persona.id,
        snsPlatform: "instagram",
      })
    }
  }

  // Determine which persona to use for the result
  // - SNS path: use selectedPersona (can be null for default)
  // - Direct path: always null (uses fixed bungee jump example)
  const resultPersona = selectedPath === "sns" ? selectedPersona : null

  // Show persona selector only in path-selection and result views for SNS path
  const showPersonaSelector = view === "path-selection" || (view === "result" && selectedPath === "sns")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className={`flex-1 ${showPersonaSelector ? "pb-24" : ""}`}>
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
            insurancePeriod={formData?.insurancePeriod}
          />
        )}
      </main>

      {/* Persona Selector at bottom - only for SNS path context */}
      {showPersonaSelector && (
        <PersonaSelector
          selectedPersonaId={selectedPersona?.id || null}
          onSelectPersona={handlePersonaSelect}
        />
      )}
    </div>
  )
}
