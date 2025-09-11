import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { VisitorChart } from "@/components/dashboard/visitor-chart"
import { TrafficSources } from "@/components/dashboard/traffic-sources"
import { PopularPages } from "@/components/dashboard/popular-pages"
import { RecentVisitors } from "@/components/dashboard/recent-visitors"
import { BarChart3 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Dashboard Analytics</h1>
            </div>
            <p className="text-muted-foreground">
              Suivez les performances de votre site web et analysez le comportement de vos visiteurs
            </p>
          </div>

          {/* Stats Overview */}
          <DashboardStats />

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <VisitorChart />
            <TrafficSources />
          </div>

          {/* Tables Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <PopularPages />
            <RecentVisitors />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
