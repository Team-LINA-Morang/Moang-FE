"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ShieldCheck, ChevronDown, FileText } from "lucide-react"
import type { CoverageModule } from "@/lib/persona-data"

interface CoverageModulesProps {
  modules: CoverageModule[]
}

export function CoverageModules({ modules }: CoverageModulesProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  const toggleModule = (name: string) => {
    setExpandedModule(expandedModule === name ? null : name)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl bg-card p-6 shadow-sm"
      style={{ border: "1px solid #e5e5e5" }}
    >
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5" style={{ color: "#1a1a6e" }} />
        <h3 className="text-base font-bold text-foreground">
          {"보장 모듈 구성"}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <AnimatePresence mode="wait">
          {modules.map((module, index) => {
            const isExpanded = expandedModule === module.name
            return (
              <motion.div
                key={`${module.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-border transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleModule(module.name)}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "#1a1a6e" }} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          {module.name}
                        </span>
                        <span
                          className="rounded px-1.5 py-0.5 text-[10px] font-medium text-white"
                          style={{ backgroundColor: "#2d8a4e" }}
                        >
                          {"승인완료"}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-sm font-bold text-foreground">
                      {module.amount}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="border-t border-border p-4"
                        style={{ backgroundColor: "rgba(26, 26, 110, 0.02)" }}
                      >
                        <div className="flex flex-col gap-4">
                          <div>
                            <div className="mb-1.5 flex items-center gap-1.5">
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
                            <div className="mb-1.5 flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5 text-destructive" />
                              <span className="text-xs font-semibold text-destructive">
                                {"보장 제외 사항"}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed text-foreground">
                              {module.details.exclusions}
                            </p>
                          </div>
                          <div>
                            <div className="mb-1.5 flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs font-semibold text-muted-foreground">
                                {"청구 서류"}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {module.details.claimDocs}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
