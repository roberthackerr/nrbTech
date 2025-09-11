"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Recherche Organique", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Réseaux Sociaux", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Référencement Payant", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Email Marketing", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Accès Direct", value: 5, color: "hsl(var(--chart-5))" },
]

export function TrafficSources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources de Trafic</CardTitle>
        <CardDescription>Répartition des visiteurs par canal d'acquisition</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-muted-foreground">{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
