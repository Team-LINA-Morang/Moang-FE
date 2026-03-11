"use client"

import { useState } from "react"
import { MessageSquare, FileText, X, AlertTriangle, CheckCircle2, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { UserFormData } from "@/components/input-form"
import type { PersonaData } from "@/lib/persona-data"

interface PersonalizedGuideProps {
  formData: UserFormData
  persona?: PersonaData | null
}

export function PersonalizedGuide({ formData, persona }: PersonalizedGuideProps) {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const name = persona?.name || formData.name || "고객"

  const getPathMessage = () => {
    if (persona) {
      return persona.aiAdvice
    }
    if (formData.path === "sns") {
      return `${name}님의 SNS 분석 결과, 야구 직관 및 영화관람 등 외부 활동 비중이 높으신 것으로 나타났습니다. 활동 반경이 넓으신 만큼 발생할 수 있는 리스크를 고려하여, 취미생활 중 벌어질 수 있는 상해와 관련 질병을 집중 보장하는 최적의 보험을 설계했습니다.`
    }
    return `${name}님, 요청하신 내용을 바탕으로 고객 니즈를 분석하여 가장 적합한 보험을 생성했습니다. ${formData.gender === "male" ? "남성" : "여성"} 기준으로 최적화되어 있습니다.`
  }

  const getProductName = () => {
    if (persona) {
      return persona.productName
    }
    return "[AI 맞춤] 번지점프 원데이 안심 보험"
  }

  const getCoverageDescription = () => {
    if (persona) {
      return `피보험자가 보험기간 중 발생한 급격하고도 우연한 외래의 사고(${persona.activityType} 등)로 입은 상해를 보상합니다.`
    }
    return "피보험자가 보험기간 중 발생한 급격하고도 우연한 외래의 사고(번지점프 등)로 입은 상해를 보상합니다."
  }

  const getExclusionNote = () => {
    if (persona) {
      return `(단, 본 상품은 ${persona.activityType} 특약으로 관련 활동을 명시적으로 보장함)`
    }
    return "(단, 본 상품은 원데이 레저 특약으로 번지점프를 명시적으로 보장함)"
  }

  return (
    <motion.div 
      key={persona?.id || "default"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-card p-6 shadow-sm" 
      style={{ border: "1px solid #e5e5e5" }}
    >
      {/* AI Advice */}
      <div className="flex gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: "rgba(26, 26, 110, 0.08)" }}
        >
          <MessageSquare className="h-4 w-4" style={{ color: "#1a1a6e" }} />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold" style={{ color: "#1a1a6e" }}>
            {"AI의 조언"}
          </p>
          <AnimatePresence mode="wait">
            <motion.p 
              key={persona?.id || "default-msg"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm leading-relaxed text-foreground"
            >
              {getPathMessage()}
            </motion.p>
          </AnimatePresence>
          
          {/* Builder Guidance */}
          <div 
            className="mt-3 flex items-center gap-2 rounded-lg p-2.5"
            style={{ backgroundColor: "rgba(212, 168, 67, 0.1)" }}
          >
            <span className="text-xs" style={{ color: "#d4a843" }}>{"💡"}</span>
            <p className="text-xs font-medium" style={{ color: "#1a1a6e" }}>
              {"모듈을 직접 선택하여 고객님만의 보험을 완성해보세요!"}
            </p>
          </div>
        </div>
      </div>

      {/* Detail View Button */}
      <div className="mt-6">
        <div
          /*type="button"
          onClick={() => setIsTermsModalOpen(true)}*/
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
          style={{ borderColor: "#d0d0d0" }}
        >
          <FileText className="h-4 w-4 text-muted-foreground" />
          {"상세 약관 다운로드 받기"}
        </div>
      </div>

      {/* Terms Modal */}
      <Dialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
        <DialogContent 
          className="max-h-[85vh] overflow-y-auto sm:max-w-xl"
          showCloseButton={false}
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Custom Close Button */}
          <button
            type="button"
            onClick={() => setIsTermsModalOpen(false)}
            className="absolute right-4 top-4 rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">닫기</span>
          </button>

          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg font-bold" style={{ color: "#1a1a6e" }}>
              <FileText className="h-5 w-5" />
              {`${getProductName()} 약관`}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-6 py-4">
            {/* 제1조 보상하는 손해 */}
            <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(26, 26, 110, 0.04)" }}>
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" style={{ color: "#1a1a6e" }} />
                <h4 className="text-sm font-bold" style={{ color: "#1a1a6e" }}>
                  {"제1조 보상하는 손해"}
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-foreground">
                {getCoverageDescription()}
              </p>
            </div>

            {/* 제2조 보상하지 않는 손해 */}
            <div className="rounded-xl border border-destructive/20 p-4" style={{ backgroundColor: "rgba(239, 68, 68, 0.04)" }}>
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <h4 className="text-sm font-bold text-destructive">
                  {"제2조 보상하지 않는 손해"}
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-foreground">
                {"피보험자의 고의, 자해, 형법상 범죄행위, 전문적인 등반이나 관련 활동을 직업적으로 하는 동안의 사고는 제외됩니다."}
              </p>
              <div 
                className="mt-3 rounded-lg p-3"
                style={{ backgroundColor: "rgba(212, 168, 67, 0.15)" }}
              >
                <p className="text-xs font-medium" style={{ color: "#1a1a6e" }}>
                  <span className="font-bold">{getExclusionNote()}</span>
                </p>
              </div>
            </div>

            {/* 가입 유의사항 */}
            <div className="rounded-xl border p-4" style={{ borderColor: "#d4a843", backgroundColor: "rgba(212, 168, 67, 0.06)" }}>
              <div className="mb-3 flex items-center gap-2">
                <Info className="h-4 w-4" style={{ color: "#d4a843" }} />
                <h4 className="text-sm font-bold" style={{ color: "#1a1a6e" }}>
                  {"가입 유의사항"}
                </h4>
              </div>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#d4a843" }}>{"•"}</span>
                  {"본 보험은 1일 한정 상품이며, 결제 즉시 효력이 발생합니다."}
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#d4a843" }}>{"•"}</span>
                  {"보험기간 내 단일 사고에 대해서만 보장됩니다."}
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#d4a843" }}>{"•"}</span>
                  {"가입 후 취소 시 결제금액 전액 환불됩니다. (활동 시작 전에 한함)"}
                </li>
              </ul>
            </div>

            {/* Legal Notice */}
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                {"본 약관은 「보험업법」 및 관련 법령에 따라 금융감독원의 심사를 받은 표준약관을 기준으로 작성되었습니다. 자세한 내용은 라이나생명 고객센터(1588-0058)로 문의하시기 바랍니다."}
              </p>
            </div>
          </div>

          {/* Footer Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsTermsModalOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#1a1a6e" }}
            >
              {"확인"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
