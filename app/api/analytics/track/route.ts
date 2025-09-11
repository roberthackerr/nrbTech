import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { page, referrer, userAgent } = body

    const analyticsData = {
      id: Date.now().toString(),
      page,
      referrer: referrer || "direct",
      userAgent,
      timestamp: new Date().toISOString(),
      ip: request.ip || "unknown",
      country: "France", // Would be determined by IP in real app
      device: userAgent?.includes("Mobile") ? "mobile" : "desktop",
    }

    // In a real app, save to database here
    console.log("[v0] Page visit tracked:", analyticsData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Analytics tracking error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
