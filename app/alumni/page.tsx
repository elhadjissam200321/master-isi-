import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Briefcase, MapPin, GraduationCap, Quote, Linkedin } from "lucide-react"

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

function AlumniAvatar({ name, color = "bg-primary" }: { name: string; color?: string }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("")
  return (
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-white font-bold text-base font-serif shrink-0`}>
      {initials}
    </div>
  )
}

const alumni = [
  {
    name: "Amine Benchekroun",
    promo: "Promotion 2020",
    position: "Data Scientist Senior",
    company: "OCP SA – Casablanca",
    location: "Casablanca, Maroc",
    quote: "Le Master ISI m'a donné les bases théoriques solides et les outils pratiques pour intégrer directement une équipe R&D.",
    color: "bg-primary",
    sector: "Industrie",
  },
  {
    name: "Fatima Zahra El Moussaoui",
    promo: "Promotion 2021",
    position: "ML Engineer",
    company: "Capgemini – Paris",
    location: "Paris, France",
    quote: "La formation m'a permis de décrocher un contrat à Paris dès la fin du master. Le niveau était vraiment au rendez-vous.",
    color: "bg-accent",
    sector: "Conseil IT",
  },
  {
    name: "Khalid Berrada",
    promo: "Promotion 2019",
    position: "AI Research Scientist",
    company: "University of Montreal – MILA",
    location: "Montréal, Canada",
    quote: "ISI a été le tremplin vers mon doctorat en apprentissage profond. Je ne regrette pas mon choix.",
    color: "bg-primary",
    sector: "Recherche",
  },
  {
    name: "Imane Tahiri",
    promo: "Promotion 2022",
    position: "Data Engineer",
    company: "Attijariwafa Bank",
    location: "Casablanca, Maroc",
    quote: "La partie Big Data & Cloud du programme est exactement ce que le secteur bancaire recherche aujourd'hui.",
    color: "bg-accent",
    sector: "Finance",
  },
  {
    name: "Yassine Cherkaoui",
    promo: "Promotion 2020",
    position: "Fondateur & CEO",
    company: "AInnova – Startup IA",
    location: "Casablanca, Maroc",
    quote: "Mon entreprise est née d'un projet de fin d'études. L'écosystème de l'FSAC m'a aidé à me lancer.",
    color: "bg-primary",
    sector: "Startup",
  },
  {
    name: "Sara Ouazzani",
    promo: "Promotion 2023",
    position: "NLP Engineer",
    company: "OrangeMoney",
    location: "Casablanca, Maroc",
    quote: "Le module de NLP m'a directement préparée à mon poste actuel. Une formation très appliquée.",
    color: "bg-accent",
    sector: "Télécoms",
  },
]

const sectors = [
  { label: "Technologie & IA", pct: 38 },
  { label: "Finance & Banque", pct: 22 },
  { label: "Recherche & Academia", pct: 18 },
  { label: "Conseil IT", pct: 12 },
  { label: "Santé & E-Gov", pct: 10 },
]

export default function AlumniPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Réseau Alumni"
        subtitle="Plus de 100 diplômés du Master ISI exercent aujourd'hui dans les secteurs technologiques les plus porteurs au Maroc et à l'international."
        breadcrumb="Alumni"
      />

      {/* Stats */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8">
          {[
            { value: "100+", label: "Diplômés actifs" },
            { value: "85%", label: "Emploi < 3 mois" },
            { value: "12", label: "Pays représentés" },
            { value: "5+", label: "Startups créées" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-serif font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Portraits</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Ils ont choisi Master ISI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <article key={a.name} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <AlumniAvatar name={a.name} color={a.color} />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{a.name}</h3>
                    <p className="text-xs text-primary font-semibold">{a.position}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Briefcase className="w-3 h-3" />
                      <span>{a.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{a.location}</span>
                    </div>
                  </div>
                </div>
                <div className="relative bg-secondary rounded-lg p-4">
                  <Quote className="absolute top-2 left-2 w-4 h-4 text-primary/20" aria-hidden="true" />
                  <p className="text-xs text-foreground leading-relaxed pl-4 italic">{a.quote}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                    {a.promo}
                  </span>
                  <span className="text-xs font-semibold text-primary">{a.sector}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors chart */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Insertion</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Secteurs d&apos;insertion professionnelle</h2>
          </div>
          <div className="max-w-xl mx-auto space-y-4">
            {sectors.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">{s.label}</span>
                  <span className="text-primary font-bold">{s.pct}%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${s.pct}%` }}
                    role="progressbar"
                    aria-valuenow={s.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${s.label}: ${s.pct}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Rejoignez la communauté ISI</h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">Vous êtes alumni du Master ISI ? Mettez à jour votre profil et restez connecté à la communauté.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm">
            <Linkedin className="w-4 h-4" />
            Rejoindre le réseau
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
