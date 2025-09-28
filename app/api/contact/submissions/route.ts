import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    const database = client.db("contactFormDB")
    const collection = database.collection("submissions")
    
    // Récupérer toutes les soumissions triées par date (plus récent en premier)
    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    // Headers pour éviter le cache
    const headers = {
      'Cache-Control': 'no-store, max-age=0',
      'Pragma': 'no-cache'
    }

    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length
    }, { headers })
  } catch (error) {
    console.error("Error fetching submissions:", error)
    return NextResponse.json(
      { success: false, message: "Erreur lors de la récupération des données" }, 
      { status: 500 }
    )
  }
}