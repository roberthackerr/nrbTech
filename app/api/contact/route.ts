import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message, phone, budget } = body

    // Simulate saving to database
    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      company,
      service,
      message,
      phone,
      budget,
      createdAt: new Date().toISOString(),
      status: "new",
    }

    // In a real app, save to database here
    console.log("[v0] New contact submission:", contactData)

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
      id: contactData.id,
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
