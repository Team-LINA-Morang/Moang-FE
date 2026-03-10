// API Configuration
// Change this URL when deploying to production or connecting to a different backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export type FlowType = "SNS" | "DIRECT"

interface TriggerResponse {
  success: boolean
  message?: string
}

/**
 * Sends a trigger signal to the backend API
 * @param flowType - The type of insurance flow ('SNS' or 'DIRECT')
 * @returns Promise resolving to the API response
 */
export async function triggerInsuranceInquiry(flowType: FlowType): Promise<TriggerResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/trigger`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ flowType }),
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error("[API] Trigger failed:", error)
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Unknown error occurred" 
    }
  }
}

/**
 * Health check for the API
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
    })
    return response.ok
  } catch {
    return false
  }
}
