"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, MousePointer, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

interface StatsData {
  totalVisitors: number
  todayVisitors: number
  pageViews: number
  bounceRate: number
}

export function DashboardStats() {
  const [statsData, setStatsData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/analytics/stats")
        const data = await response.json()
        setStatsData(data)
      } catch (error) {
        console.error("[v0] Failed to fetch stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="space-y-0 pb-2">
              <div className="h-4 bg-muted rounded w-24"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-16 mb-2"></div>
              <div className="h-3 bg-muted rounded w-20"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const stats = [
    {
      title: "Visiteurs Uniques",
      value: statsData?.totalVisitors.toLocaleString() || "0",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Users,
      description: "Ce mois-ci",
    },
    {
      title: "Pages Vues",
      value: statsData?.pageViews.toLocaleString() || "0",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: Eye,
      description: "Ce mois-ci",
    },
    {
      title: "Taux de Rebond",
      value: `${statsData?.bounceRate || 0}%`,
      change: "-2.1%",
      changeType: "positive" as const,
      icon: MousePointer,
      description: "Amélioration",
    },
    {
      title: "Aujourd'hui",
      value: statsData?.todayVisitors.toLocaleString() || "0",
      change: "visiteurs",
      changeType: "neutral" as const,
      icon: TrendingUp,
      description: "En temps réel",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="flex items-center space-x-2">
              <span
                className={`text-xs font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                      ? "text-red-600"
                      : "text-muted-foreground"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground">{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
