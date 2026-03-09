"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Plus, 
  Minus, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  FileText,
  CheckCircle2
} from "lucide-react"
import type { CoverageModule, PersonaData } from "@/lib/persona-data"
import { 
  calculateTotal, 
  BUNGEE_RECOMMENDED_MODULES, 
  DEFAULT_DIRECT_COVERAGES 
} from "@/lib/persona-data"

interface ModuleBuilderProps {
  persona?: PersonaData | null
  onTotalChange?: (total: number) => void
}

// Animated counter component
function AnimatedPrice({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value)
  const previousValue = useRef(value)
  
  useEffect(() => {
    if (previousValue.current === value) return
    
    const startValue = previousValue.current
    const endValue = value
    const duration = 500
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart)
      
      setDisplayValue(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
    previousValue.current = value
  }, [value])
  
  return <span>{displayValue.toLocaleString()}</span>
}

export function ModuleBuilder({ persona, onTotalChange }: ModuleBuilderProps) {
  const [selectedModules, setSelectedModules] = useState<CoverageModule[]>([])
  const [availableModules, setAvailableModules] = useState<CoverageModule[]>([])
  const [expandedModule, setExpandedModule] = useState<string | null>(null)
  
  // Initialize modules when persona changes
  useEffect(() => {
    if (persona) {
      setSelectedModules([...persona.coverages])
      setAvailableModules([...persona.recommendedModules])
    } else {
      setSelectedModules([...DEFAULT_DIRECT_COVERAGES])
      setAvailableModules([...BUNGEE_RECOMMENDED_MODULES])
    }
    setExpandedModule(null)
  }, [persona?.id])
  
  // Calculate total and notify parent
  const totalPrice = calculateTotal(selectedModules)
  
  useEffect(() => {
    onTotalChange?.(totalPrice)
  }, [totalPrice, onTotalChange])
  
  const addModule = (module: CoverageModule) => {
    setSelectedModules(prev => [...prev, module])
    setAvailableModules(prev => prev.filter(m => m.name !== module.name))
  }
  
  const removeModule = (module: CoverageModule) => {
    // Don't allow removing if only 1 module left
    if (selectedModules.length <= 1) return
    
    setSelectedModules(prev => prev.filter(m => m.name !== module.name))
    setAvailableModules(prev => [...prev, module])
  }
  
  const toggleExpand = (name: string) => {
    setExpandedModule(expandedModule === name ? null : name)
  }

  return (
    <motion.div
      key={persona?.id || "default"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-6"
    >
      {/* Total Price Display */}
      <div 
        className="rounded-2xl p-5 sm:p-6"
        style={{ backgroundColor: "#1a1a6e" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white/80">{"예상 1일 보험료"}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              <AnimatedPrice value={totalPrice} />
            </span>
            <span className="text-sm font-medium text-white/80">{"원"}</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-white/60">
          {"모듈을 자유롭게 추가/제거하여 나만의 보험을 설계하세요"}
        </p>
      </div>

      {/* Selected Modules - My Coverage */}
      <div 
        className="rounded-2xl bg-card p-5 shadow-sm sm:p-6"
        style={{ border: "1px solid #e5e5e5" }}
      >
        <div className="mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5" style={{ color: "#1a1a6e" }} />
          <h3 className="text-base font-bold text-foreground">
            {"나의 맞춤 보장"}
          </h3>
          <span 
            className="ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
            style={{ backgroundColor: "#1a1a6e" }}
          >
            {selectedModules.length}{"개"}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {selectedModules.map((module, index) => (
              <motion.div
                key={`selected-${module.name}`}
                layout
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border border-border"
                style={{ borderColor: "#1a1a6e40" }}
              >
                <div className="flex items-center justify-between p-3 sm:p-4">
                  <button
                    type="button"
                    onClick={() => toggleExpand(module.name)}
                    className="flex flex-1 items-center gap-3 text-left"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "#1a1a6e" }} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          {module.name}
                        </span>
                        <span 
                          className="rounded px-1.5 py-0.5 text-[10px] font-medium"
                          style={{ backgroundColor: "#1a1a6e15", color: "#1a1a6e" }}
                        >
                          {module.amount}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                        {module.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                        expandedModule === module.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className="ml-3 flex items-center gap-2">
                    <span className="text-sm font-bold" style={{ color: "#1a1a6e" }}>
                      {module.price.toLocaleString()}{"원"}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeModule(module)}
                      disabled={selectedModules.length <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-destructive/30 bg-destructive/10 text-destructive transition-all hover:bg-destructive hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedModule === module.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="border-t border-border p-3 sm:p-4"
                        style={{ backgroundColor: "rgba(26, 26, 110, 0.02)" }}
                      >
                        <div className="flex flex-col gap-3">
                          <div>
                            <div className="mb-1 flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5" style={{ color: "#1a1a6e" }} />
                              <span className="text-xs font-semibold" style={{ color: "#1a1a6e" }}>
                                {"보장 내용"}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed text-foreground">
                              {module.details.coverage}
                            </p>
                          </div>
                          <div>
                            <div className="mb-1 flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5 text-destructive" />
                              <span className="text-xs font-semibold text-destructive">
                                {"보장 제외"}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {module.details.exclusions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Available Modules - Recommended */}
      {availableModules.length > 0 && (
        <div 
          className="rounded-2xl p-5 sm:p-6"
          style={{ 
            backgroundColor: "rgba(26, 26, 110, 0.03)", 
            border: "1px dashed rgba(26, 26, 110, 0.2)" 
          }}
        >
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5" style={{ color: "#d4a843" }} />
            <h3 className="text-base font-bold text-foreground">
              {"추가 추천 보장"}
            </h3>
            <span 
              className="ml-auto rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ backgroundColor: "#d4a84320", color: "#d4a843" }}
            >
              {availableModules.length}{"개 선택 가능"}
            </span>
          </div>

          <p className="mb-4 text-xs text-muted-foreground">
            {"AI가 분석한 추가 보장 모듈입니다. 필요한 항목을 자유롭게 추가해보세요."}
          </p>

          <div className="flex flex-col gap-2">
            <AnimatePresence mode="popLayout">
              {availableModules.map((module, index) => (
                <motion.div
                  key={`available-${module.name}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-3 transition-all hover:border-[#d4a843] sm:p-4"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-foreground">
                        {module.name}
                      </span>
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground" style={{ backgroundColor: "#f5f5f5" }}>
                        {module.amount}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                      {module.description}
                    </p>
                  </div>
                  <div className="ml-3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      +{module.price.toLocaleString()}{"원"}
                    </span>
                    <button
                      type="button"
                      onClick={() => addModule(module)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border text-white transition-all hover:opacity-80"
                      style={{ backgroundColor: "#d4a843", borderColor: "#d4a843" }}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </motion.div>
  )
}
