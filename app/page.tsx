"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { InsuranceForm } from "@/components/insurance-form"
import { InsuranceResult } from "@/components/insurance-result"

export interface FormData {
  birthDate: string
  gender: "male" | "female"
  period: string
  customRequest: string
}

export default function Home() {
  const [view, setView] = useState<"form" | "result">("form")
  const [formData, setFormData] = useState<FormData | null>(null)

  const handleSubmit = (data: FormData) => {
    setFormData(data)
    setView("result")
  }

  const handleBack = () => {
    setView("form")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {view === "form" ? (
          <InsuranceForm onSubmit={handleSubmit} />
        ) : (
          <InsuranceResult formData={formData!} onBack={handleBack} />
        )}
      </main>
    </div>
  )
}
