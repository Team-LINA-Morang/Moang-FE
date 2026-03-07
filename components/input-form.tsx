"use client"

import { useState, useRef } from "react"
import { CheckCircle2, Circle, ArrowLeft, Upload, X, Image as ImageIcon } from "lucide-react"

export interface UserFormData {
  name: string
  birthDate: string
  gender: "male" | "female"
  phone: string
  email: string
  customRequest: string
  snsId?: string
  imageFiles?: File[]
  path: "sns" | "direct"
}

interface InputFormProps {
  path: "sns" | "direct"
  onSubmit: (data: UserFormData) => void
  onBack: () => void
}

export function InputForm({ path, onSubmit, onBack }: InputFormProps) {
  const [name, setName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [customRequest, setCustomRequest] = useState("")
  const [snsId, setSnsId] = useState("")
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleBirthDateChange = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 6)
    setBirthDate(numeric)
  }

  const handlePhoneChange = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 11)
    setPhone(numeric)
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
      phone,
      email,
      customRequest,
      snsId: path === "sns" ? snsId : undefined,
      imageFiles: path === "direct" ? imageFiles : undefined,
      path,
    })
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {"돌아가기"}
      </button>

      <div className="rounded-xl bg-card p-8 shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
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
                {"생년월일 (6자리)"}
              </label>
              <input
                id="birthdate"
                type="text"
                inputMode="numeric"
                placeholder="001125"
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

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-medium text-muted-foreground">
                {"핸드폰 번호"}
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="01012345678"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                {"이메일"}
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </div>
        </div>

        {/* Path-specific Section */}
        {path === "sns" ? (
          <div className="mb-6">
            <p className="mb-4 text-sm font-medium text-muted-foreground">{"SNS 정보"}</p>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="snsId" className="text-xs font-medium text-muted-foreground">
                {"SNS 계정명 (ID)"}
              </label>
              <input
                id="snsId"
                type="text"
                placeholder="@username"
                value={snsId}
                onChange={(e) => setSnsId(e.target.value)}
                className="h-12 rounded-lg border border-border bg-card px-4 text-base font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {"인스타그램, 페이스북 등의 공개 계정 ID를 입력해 주세요."}
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
