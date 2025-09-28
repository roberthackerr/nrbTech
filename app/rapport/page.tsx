"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  Download, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Calendar,
  User,
  DollarSign,
  Layers
} from "lucide-react"
import { useEffect, useState } from "react"

interface ContactSubmission {
  _id: string
  name: string
  email: string
  company: string
  service: string
  message: string
  phone: string
  budget: string
  status: "new" | "read" | "replied" | "archived"
  createdAt: string
}

export default function Rapport() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/contact/submissions")
      const data = await response.json()
      if (data.success) {
        setSubmissions(data.data)
      }
    } catch (error) {
      console.error("Error fetching submissions:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.service.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || submission.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500 hover:bg-blue-600"
      case "read": return "bg-green-500 hover:bg-green-600"
      case "replied": return "bg-purple-500 hover:bg-purple-600"
      case "archived": return "bg-gray-500 hover:bg-gray-600"
      default: return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const exportToCSV = () => {
    const headers = ["Nom", "Email", "Entreprise", "Service", "Budget", "Téléphone", "Statut", "Date"]
    const csvData = filteredSubmissions.map(sub => [
      sub.name,
      sub.email,
      sub.company,
      sub.service,
      sub.budget,
      sub.phone,
      sub.status,
      new Date(sub.createdAt).toLocaleDateString('fr-FR')
    ])
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(","))
      .join("\n")
    
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Chargement des données...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="py-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Rapport des Contacts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gérez et analysez toutes les soumissions de formulaire de contact
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar avec statistiques */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <Badge variant="secondary">{submissions.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Nouveaux</span>
                  <Badge className="bg-blue-500">{submissions.filter(s => s.status === "new").length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Répondu</span>
                  <Badge className="bg-green-500">{submissions.filter(s => s.status === "replied").length}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filtres</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Statut</label>
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="new">Nouveaux</option>
                    <option value="read">Lus</option>
                    <option value="replied">Répondu</option>
                    <option value="archived">Archivé</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3 space-y-6">
            {/* Barre d'outils */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Rechercher par nom, email, entreprise..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={exportToCSV}>
                      <Download className="h-4 w-4 mr-2" />
                      Exporter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liste des soumissions */}
            <Card>
              <CardHeader>
                <CardTitle>Soumissions de Contact</CardTitle>
                <CardDescription>
                  {filteredSubmissions.length} résultat(s) trouvé(s)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredSubmissions.map((submission) => (
                    <Card 
                      key={submission._id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedSubmission?._id === submission._id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground truncate">
                                  {submission.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(submission.createdAt).toLocaleDateString('fr-FR')}
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Mail className="h-3 w-3 text-muted-foreground" />
                                <span className="truncate">{submission.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="h-3 w-3 text-muted-foreground" />
                                <span className="truncate">{submission.company || "Non spécifié"}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Layers className="h-3 w-3 text-muted-foreground" />
                                <span className="truncate">{submission.service}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-3 w-3 text-muted-foreground" />
                                <span className="truncate">{submission.budget || "Non spécifié"}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Badge className={getStatusColor(submission.status)}>
                              {submission.status === "new" && "Nouveau"}
                              {submission.status === "read" && "Lu"}
                              {submission.status === "replied" && "Répondu"}
                              {submission.status === "archived" && "Archivé"}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {filteredSubmissions.length === 0 && (
                    <div className="text-center py-12">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Aucune soumission trouvée
                      </h3>
                      <p className="text-muted-foreground">
                        Aucune donnée ne correspond à vos critères de recherche.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Modal de détail */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
              <CardHeader className="border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      {selectedSubmission.name}
                    </CardTitle>
                    <CardDescription>
                      Soumission du {new Date(selectedSubmission.createdAt).toLocaleDateString('fr-FR')}
                    </CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedSubmission(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="h-4 w-4" />
                        <span className="text-foreground">{selectedSubmission.email}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Téléphone</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="h-4 w-4" />
                        <span className="text-foreground">{selectedSubmission.phone || "Non spécifié"}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Entreprise</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Building className="h-4 w-4" />
                        <span className="text-foreground">{selectedSubmission.company || "Non spécifié"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Service demandé</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Layers className="h-4 w-4" />
                        <span className="text-foreground">{selectedSubmission.service}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Budget</label>
                      <div className="flex items-center gap-2 mt-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-foreground">{selectedSubmission.budget || "Non spécifié"}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Statut</label>
                      <div className="mt-1">
                        <Badge className={getStatusColor(selectedSubmission.status)}>
                          {selectedSubmission.status === "new" && "Nouveau"}
                          {selectedSubmission.status === "read" && "Lu"}
                          {selectedSubmission.status === "replied" && "Répondu"}
                          {selectedSubmission.status === "archived" && "Archivé"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <div className="mt-2 p-4 bg-muted rounded-lg">
                    <p className="text-foreground whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}