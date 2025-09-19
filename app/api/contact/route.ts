import { type NextRequest, NextResponse } from "next/server"
import { MongoClient, ServerApiVersion } from 'mongodb'

// Your MongoDB Atlas connection string
const uri = process.env.MONGODB_URI || "mongodb+srv://Nrbtech:(2020)=>{nrbtech};@cluster0.wufkznc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message, phone, budget } = body

    // Connect to MongoDB
    await client.connect()
    
    // Select database and collection
    const database = client.db("contactFormDB")
    const collection = database.collection("submissions")
    
    // Create document to insert
    const contactData = {
      name,
      email,
      company,
      service,
      message,
      phone: phone || "", // Handle optional field
      budget: budget || "", // Handle optional field
      createdAt: new Date(),
      status: "new",
    }

    // Insert the data into MongoDB
    const result = await collection.insertOne(contactData)
    
    console.log("New contact submission saved with ID:", result.insertedId)

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
      id: result.insertedId,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi du message" }, 
      { status: 500 }
    )
  } finally {
    // Close the connection
    await client.close()
  }
}