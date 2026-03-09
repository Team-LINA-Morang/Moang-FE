"use client"

import { useState, useEffect } from "react"
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

  const handlePersonaSelect = (personaId: string) => {
    const persona = PERSONAS.find(p => p.id === personaId) || null
    setSelectedPersona(persona)
    
    // If persona is selected and we're at path-selection, auto-navigate through SNS path
    if (persona && view === "path-selection") {
      setSelectedPath("sns")
      // Create mock form data for the persona
      setFormData({
        name: persona.name,
        birthDate: "1995-01-01",
        gender: "male",
        phone: "010-1234-5678",
        email: `${persona.id}@example.com`,
        customRequest: "",
        snsId: persona.id,
        snsPlatform: "instagram",
        path: "sns",
      })
      setView("result")
    } else if (persona && view === "result") {
      // Update form data with new persona
      setFormData({
        name: persona.name,
        birthDate: "1995-01-01",
        gender: "male",
        phone: "010-1234-5678",
        email: `${persona.id}@example.com`,
        customRequest: "",
        snsId: persona.id,
        snsPlatform: "instagram",
        path: "sns",
      })
    }
  }

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
            persona={selectedPersona}
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

      {/* Persona Selector at bottom */}
      {showPersonaSelector && (
        <PersonaSelector
          selectedPersonaId={selectedPersona?.id || null}
          onSelectPersona={handlePersonaSelect}
        />
      )}
    </div>
  )
}
