// app/api/contact/submissions/route.ts
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const runtime = 'nodejs' // Force Node.js runtime

import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    console.log('🔄 FRESH API CALL -', new Date().toISOString())
    
    const client = await clientPromise
    const database = client.db("contactFormDB")
    const collection = database.collection("submissions")
    
    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    console.log(`📊 Fresh data from MongoDB: ${submissions.length} submissions`)

    // Headers très agressifs contre le cache
    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length,
      timestamp: new Date().toISOString() // Pour vérifier si c'est frais
    }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate, proxy-revalidate',
        'CDN-Cache-Control': 'no-cache',
        'Vercel-CDN-Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Vercel-Cache': 'BYPASS'
      }
    })
    
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { success: false, message: "Erreur serveur" }, 
      { status: 500 }
    )
  }
}