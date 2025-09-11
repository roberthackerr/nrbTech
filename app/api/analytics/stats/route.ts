import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Simulate real analytics data
    const stats = {
      totalVisitors: 2847,
      todayVisitors: 156,
      pageViews: 8934,
      bounceRate: 34.2,
      avgSessionDuration: "3m 42s",
      topPages: [
        { page: "/", views: 1234, percentage: 45 },
        { page: "/services", views: 567, percentage: 20 },
        { page: "/services/ai", views: 345, percentage: 12 },
        { page: "/contact", views: 289, percentage: 10 },
        { page: "/about", views: 234, percentage: 8 },
      ],
      trafficSources: [
        { source: "Recherche organique", visitors: 1423, percentage: 50 },
        { source: "Accès direct", visitors: 854, percentage: 30 },
        { source: "Réseaux sociaux", visitors: 341, percentage: 12 },
        { source: "Référencement", visitors: 229, percentage: 8 },
      ],
      recentVisitors: [
        { id: "1", location: "Paris, France", page: "/services/ai", time: "2 min", device: "Desktop" },
        { id: "2", location: "Lyon, France", page: "/contact", time: "5 min", device: "Mobile" },
        { id: "3", location: "Marseille, France", page: "/", time: "8 min", device: "Desktop" },
        { id: "4", location: "Toulouse, France", page: "/services/cybersecurity", time: "12 min", device: "Tablet" },
        { id: "5", location: "Nice, France", page: "/about", time: "15 min", device: "Mobile" },
      ],
      chartData: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        visitors: Math.floor(Math.random() * 200) + 50,
        pageViews: Math.floor(Math.random() * 500) + 100,
      })),
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("[v0] Analytics stats error:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
