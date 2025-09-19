import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password, company } = body

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("contactFormDB")
    const usersCollection = db.collection("users")

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Un utilisateur avec cet email existe déjà" },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const result = await usersCollection.insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      company: company || "",
      createdAt: new Date(),
      updatedAt: new Date()
    })

    // Return success response (without password)
    return NextResponse.json({
      success: true,
      message: "Compte créé avec succès",
      user: {
        id: result.insertedId,
        firstName,
        lastName,
        email,
        company: company || ""
      }
    }, { status: 201 })

  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { success: false, message: "Erreur lors de la création du compte" },
      { status: 500 }
    )
  }
}