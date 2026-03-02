import { Header } from "@/components/header"
import { InsuranceForm } from "@/components/insurance-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <InsuranceForm />
      </main>
    </div>
  )
}
