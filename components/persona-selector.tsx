"use client"

import { PERSONAS, type PersonaData } from "@/lib/persona-data"
import { User } from "lucide-react"

interface PersonaSelectorProps {
  selectedPersona: PersonaData | null
  onSelectPersona: (persona: PersonaData) => void
}

export function PersonaSelector({ selectedPersona, onSelectPersona }: PersonaSelectorProps) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur-sm"
      style={{ borderColor: "#e5e5e5" }}
    >
      <div className="mx-auto max-w-4xl px-4 py-3">
        <div className="mb-2 flex items-center gap-2">
          <User className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
          <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
            {"시뮬레이션 페르소나 선택"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PERSONAS.map((persona) => {
            const isSelected = selectedPersona?.id === persona.id
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => onSelectPersona(persona)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "text-white shadow-md"
                    : "border bg-card text-foreground hover:bg-muted/50"
                }`}
                style={{
                  backgroundColor: isSelected ? "#1a1a6e" : undefined,
                  borderColor: isSelected ? "#1a1a6e" : "#d0d0d0",
                }}
              >
                <span>{persona.name}</span>
                <span className="text-[10px] opacity-70">
                  {persona.category.split("/")[0]}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
