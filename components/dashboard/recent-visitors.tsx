import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, Clock } from "lucide-react"

const visitors = [
  {
    id: "1",
    location: "Paris, France",
    device: "Desktop",
    browser: "Chrome",
    pages: 5,
    duration: "4m 32s",
    status: "active",
    initials: "PA",
  },
  {
    id: "2",
    location: "Lyon, France",
    device: "Mobile",
    browser: "Safari",
    pages: 3,
    duration: "2m 18s",
    status: "recent",
    initials: "LY",
  },
  {
    id: "3",
    location: "Marseille, France",
    device: "Desktop",
    browser: "Firefox",
    pages: 7,
    duration: "6m 45s",
    status: "recent",
    initials: "MA",
  },
  {
    id: "4",
    location: "Toulouse, France",
    device: "Tablet",
    browser: "Chrome",
    pages: 2,
    duration: "1m 52s",
    status: "recent",
    initials: "TO",
  },
  {
    id: "5",
    location: "Nice, France",
    device: "Mobile",
    browser: "Chrome",
    pages: 4,
    duration: "3m 21s",
    status: "recent",
    initials: "NI",
  },
  {
    id: "6",
    location: "Bordeaux, France",
    device: "Desktop",
    browser: "Edge",
    pages: 6,
    duration: "5m 14s",
    status: "recent",
    initials: "BO",
  },
]

export function RecentVisitors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visiteurs Récents</CardTitle>
        <CardDescription>Activité des visiteurs en temps réel</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {visitors.map((visitor) => (
            <div key={visitor.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{visitor.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{visitor.location}</span>
                    {visitor.status === "active" && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {visitor.device} • {visitor.browser}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">{visitor.pages} pages</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{visitor.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
