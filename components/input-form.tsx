"use client"

import { useState, useRef } from "react"
import { CheckCircle2, Circle, ArrowLeft, Upload, X, Image as ImageIcon, Instagram } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type SnsPlatform = "instagram" | "facebook" | "threads"

export interface UserFormData {
  name: string
  birthDate: string
  gender: "male" | "female"
  occupation: string
  insurancePeriod: string
  customRequest: string
  snsId?: string
  snsPlatform?: SnsPlatform
  imageFiles?: File[]
  path: "sns" | "direct"
}

const snsPlatforms = [
  { value: "instagram" as SnsPlatform, label: "Instagram", icon: Instagram },
  { value: "facebook" as SnsPlatform, label: "Facebook", icon: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )},
  { value: "threads" as SnsPlatform, label: "Threads", icon: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.025.88-.733 2.064-1.15 3.537-1.248.999-.066 1.89.02 2.682.202-.035-1.136-.298-2.01-.788-2.595-.587-.7-1.497-1.053-2.703-1.053h-.094c-1.024.022-1.866.315-2.433.848l-1.348-1.541c.897-.847 2.157-1.3 3.69-1.325h.142c1.861 0 3.303.57 4.285 1.694.895 1.025 1.358 2.485 1.378 4.34.276.155.538.326.782.514 1.142.878 1.918 2.105 2.28 3.59.476 1.954.155 4.249-1.51 5.877-1.945 1.902-4.32 2.726-7.674 2.756zM10.06 14.43c-.726.048-1.286.243-1.67.578-.343.3-.507.645-.485 1.033.034.633.694 1.377 2.124 1.302 1.07-.057 1.9-.47 2.47-1.228.334-.446.555-.984.67-1.586-.655-.152-1.394-.181-2.109-.099z"/>
    </svg>
  )},
]

interface InputFormProps {
  path: "sns" | "direct"
  onSubmit: (data: UserFormData) => void
  onBack: () => void
}

export function InputForm({ path, onSubmit, onBack }: InputFormProps) {
  const [name, setName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [occupation, setOccupation] = useState("")
  const [insurancePeriod, setInsurancePeriod] = useState("")
  const [customRequest, setCustomRequest] = useState("")
  const [snsPlatform, setSnsPlatform] = useState<SnsPlatform>("instagram")
  const [snsId, setSnsId] = useState("")
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleBirthDateChange = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 8)
    setBirthDate(numeric)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setImageFiles((prev) => [...prev, ...files])
      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setImagePreviews((prev) => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index))
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    onSubmit({
      name,
      birthDate,
      gender,
      occupation,
      insurancePeriod,
      customRequest,
      snsId: path === "sns" ? snsId : undefined,
      snsPlatform: path === "sns" ? snsPlatform : undefined,
      imageFiles: path === "direct" ? imageFiles : undefined,
      path,
    })
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
        <h2 className="mb-6 text-lg font-bold text-foreground">
          {path === "sns" ? "SNS 분석으로 보험 만들기" : "직접 보험 만들기"}
        </h2>

        {/* Common Info Section */}
        <div className="mb-8">
          <p className="mb-4 text-sm font-medium text-muted-foreground">{"기본 정보"}</p>
          
          <div className="grid gap-4 md:grid-cols-2">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                {"이름"}
              </label>
              <input
                id="name"
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            {/* Birth Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="birthdate" className="text-xs font-medium text-muted-foreground">
                {"생년월일 (8자리)"}
              </label>
              <input
                id="birthdate"
                type="text"
                inputMode="numeric"
                placeholder="20001125"
                value={birthDate}
                onChange={(e) => handleBirthDateChange(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-muted-foreground">{"성별"}</span>
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-l-lg border text-sm font-semibold transition-colors ${
                    gender === "male"
                      ? "border-[#1a1a6e] bg-card text-foreground"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {gender === "male" ? (
                    <CheckCircle2 className="h-5 w-5" style={{ color: "#1a1a6e" }} />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/40" />
                  )}
                  {"남자"}
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-r-lg border-y border-r text-sm font-semibold transition-colors ${
                    gender === "female"
                      ? "border-[#1a1a6e] bg-card text-foreground"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {gender === "female" ? (
                    <CheckCircle2 className="h-5 w-5" style={{ color: "#1a1a6e" }} />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/40" />
                  )}
                  {"여자"}
                </button>
              </div>
            </div>

            {/* Occupation */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="occupation" className="text-xs font-medium text-muted-foreground">
                {"직업"}
              </label>
              <input
                id="occupation"
                type="text"
                placeholder="직업을 입력해주세요"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            {/* Insurance Period */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="insurancePeriod" className="text-xs font-medium text-muted-foreground">
                {"보험 기간"}
              </label>
              <input
                id="insurancePeriod"
                type="text"
                placeholder="예: 3일, 1주일, 1개월"
                value={insurancePeriod}
                onChange={(e) => setInsurancePeriod(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </div>
        </div>

        {/* Path-specific Section */}
        {path === "sns" ? (
          <div className="mb-6">
            <p className="mb-4 text-sm font-medium text-muted-foreground">{"SNS 정보"}</p>
            
            {/* SNS Platform Selection */}
            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted-foreground">
                {"SNS 플랫폼 선택"}
              </label>
              <Select value={snsPlatform} onValueChange={(value) => setSnsPlatform(value as SnsPlatform)}>
                <SelectTrigger className="h-12 w-full rounded-lg border border-border bg-card px-4 text-base font-medium">
                  <SelectValue placeholder="플랫폼을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {snsPlatforms.map((platform) => {
                    const IconComponent = platform.icon
                    return (
                      <SelectItem 
                        key={platform.value} 
                        value={platform.value}
                        className="h-11 text-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent />
                          <span>{platform.label}</span>
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* SNS ID Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="snsId" className="text-xs font-medium text-muted-foreground">
                {"SNS 계정명 (ID)"}
              </label>
              <input
                id="snsId"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={snsId}
                onChange={(e) => setSnsId(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {"선택한 플랫폼의 공개 계정 ID를 @ 없이 입력해 주세요."}
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <p className="mb-4 text-sm font-medium text-muted-foreground">{"보험 요청 정보"}</p>
            
            {/* Custom Request */}
            <div className="mb-4 flex flex-col gap-1.5">
              <label htmlFor="custom-request" className="text-xs font-medium text-muted-foreground">
                {"어떤 보험을 만들어 드릴까요?"}
              </label>
              <textarea
                id="custom-request"
                placeholder="예: 번지점프 사고를 대비하는 보험 만들어줘"
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-muted-foreground">
                {"이미지 첨부 (선택)"}
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-24 w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/30 text-sm text-muted-foreground transition-colors hover:border-[#1a1a6e] hover:bg-muted/50"
              >
                <Upload className="h-5 w-5" />
                {"클릭하여 이미지 업로드"}
              </button>
              
              {imagePreviews.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <div className="h-20 w-20 overflow-hidden rounded-lg border border-border">
                        {preview ? (
                          <img
                            src={preview}
                            alt={`업로드 이미지 ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-muted">
                            <ImageIcon className="h-6 w-6 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-white"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-6 flex h-14 w-full items-center justify-center rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1a1a6e" }}
        >
          {"보험 조회하기"}
        </button>
      </div>
    </section>
  )
}
