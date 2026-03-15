import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Calendar, Tag, ArrowRight, Clock } from "lucide-react"

function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle: string; breadcrumb: string }) {
  return (
    <section className="bg-primary py-14 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {[[10,10,90,90],[90,10,10,90],[50,0,50,100],[0,50,100,50]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.5"/>
        ))}
        {[[20,20],[80,20],[50,50],[20,80],[80,80]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="white"/>
        ))}
      </svg>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-white/60 text-xs mb-4">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/90">{breadcrumb}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">{title}</h1>
        <p className="text-white/75 mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  )
}

const actualites = [
  {
    id: 1,
    date: "15 Mars 2025",
    title: "Ouverture des candidatures pour l'année 2025-2026",
    excerpt: "Les candidatures pour le Master ISI sont ouvertes. Les dossiers de candidature peuvent être déposés jusqu'au 15 juin 2025. Découvrez les modalités d'inscription et les critères de sélection.",
    category: "Admission",
    featured: true,
  },
  {
    id: 2,
    date: "10 Mars 2025",
    title: "Journée Portes Ouvertes du Master ISI",
    excerpt: "Venez découvrir le programme du Master ISI lors de notre journée portes ouvertes. Rencontrez les enseignants et les étudiants actuels pour en savoir plus sur la formation.",
    category: "Événement",
    featured: true,
  },
  {
    id: 3,
    date: "28 Février 2025",
    title: "Publication dans International Journal of AI",
    excerpt: "L'équipe de recherche du laboratoire LIMSAD a publié un article sur l'optimisation des réseaux de neurones convolutifs pour la détection d'anomalies.",
    category: "Recherche",
    featured: false,
  },
  {
    id: 4,
    date: "20 Février 2025",
    title: "Séminaire : Introduction à l'IA Agentique",
    excerpt: "Le Pr. SAOUDI a animé un séminaire sur l'IA agentique et ses applications dans les systèmes autonomes. Une conférence ouverte aux étudiants et professionnels.",
    category: "Séminaire",
    featured: false,
  },
  {
    id: 5,
    date: "15 Février 2025",
    title: "Partenariat avec OCP Group",
    excerpt: "Le Master ISI signe un nouveau partenariat avec OCP Group pour des stages et projets de fin d'études dans le domaine de l'IA industrielle.",
    category: "Partenariat",
    featured: false,
  },
  {
    id: 6,
    date: "1 Février 2025",
    title: "Résultats de la première session S1",
    excerpt: "Les résultats de la session d'examens du semestre 1 sont disponibles. Consultez vos notes sur le portail étudiant de la FSAC.",
    category: "Scolarité",
    featured: false,
  },
  {
    id: 7,
    date: "25 Janvier 2025",
    title: "Workshop : Deep Learning avec PyTorch",
    excerpt: "Un workshop pratique de 2 jours sur le Deep Learning avec PyTorch a été organisé pour les étudiants du Master ISI.",
    category: "Formation",
    featured: false,
  },
  {
    id: 8,
    date: "15 Janvier 2025",
    title: "Visite d'entreprise : Microsoft Maroc",
    excerpt: "Les étudiants de M1 ont visité les locaux de Microsoft Maroc pour découvrir les métiers de l'IA et les opportunités de carrière.",
    category: "Visite",
    featured: false,
  },
]

const categories = ["Tous", "Admission", "Événement", "Recherche", "Séminaire", "Partenariat", "Formation", "Scolarité"]

export default function ActualitesPage() {
  const featuredNews = actualites.filter(a => a.featured)
  const otherNews = actualites.filter(a => !a.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Actualités"
        subtitle="Restez informé des dernières nouvelles du Master ISI : événements, publications, partenariats et opportunités."
        breadcrumb="Actualités"
      />

      {/* Categories Filter */}
      <section className="py-6 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "Tous"
                    ? "bg-primary text-white"
                    : "bg-card border border-border text-foreground hover:bg-background"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">À la Une</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredNews.map((news) => (
              <article
                key={news.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="bg-primary/10 h-48 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <Tag className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                      {news.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary cursor-pointer hover:gap-2 transition-all">
                    Lire la suite <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Toutes les actualités</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((news) => (
              <article
                key={news.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-primary border border-border">
                    {news.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary cursor-pointer hover:gap-2 transition-all">
                  Lire la suite <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm">1</button>
              <button className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium text-sm hover:bg-background">2</button>
              <button className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium text-sm hover:bg-background">3</button>
              <span className="px-2 text-muted-foreground">...</span>
              <button className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium text-sm hover:bg-background">10</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Restez informé</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités du Master ISI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
