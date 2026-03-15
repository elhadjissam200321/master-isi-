import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, FlaskConical, FileText, ExternalLink, Users } from "lucide-react"

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

const axes = [
  {
    icon: "🧠",
    title: "Intelligence Artificielle & Apprentissage Automatique",
    desc: "Développement de nouveaux algorithmes d'apprentissage profond, transfer learning, apprentissage few-shot et méta-apprentissage.",
    color: "bg-primary",
  },
  {
    icon: "📊",
    title: "Data Science & Analyse de Données Massives",
    desc: "Méthodes de fouille de données, visualisation avancée, traitement de flux de données et systèmes de recommandation.",
    color: "bg-accent",
  },
  {
    icon: "🤖",
    title: "Systèmes Embarqués & IoT Intelligents",
    desc: "Intégration de modèles légers sur systèmes embarqués, Edge AI, optimisation pour appareils contraints.",
    color: "bg-primary",
  },
  {
    icon: "💬",
    title: "Traitement du Langage Naturel",
    desc: "Modèles de langage pour l'arabe et le darija, analyse de sentiments, extraction d'information et résumé automatique.",
    color: "bg-accent",
  },
]

const publications = [
  {
    title: "Deep Transfer Learning for Arabic Sentiment Analysis",
    authors: "Bensalem R., El Afia A., Chaouni M.",
    journal: "Journal of Intelligent Information Systems",
    year: "2024",
    type: "Article",
  },
  {
    title: "Multi-Agent Reinforcement Learning for Smart Grid Optimization",
    authors: "Lahlou K., Bensalem R., Mansouri O.",
    journal: "IEEE Transactions on Smart Grid",
    year: "2024",
    type: "Article",
  },
  {
    title: "Edge AI Framework for Real-Time Anomaly Detection in IoT Networks",
    authors: "Chaouni M., Lahlou K.",
    journal: "International Conference on Machine Learning Applications (ICMLA)",
    year: "2023",
    type: "Conférence",
  },
  {
    title: "Federated Learning for Medical Image Segmentation in Low-Resource Settings",
    authors: "El Afia A., Bensalem R., Chaouabi I.",
    journal: "Medical Image Analysis Journal",
    year: "2023",
    type: "Article",
  },
  {
    title: "Knowledge Graph Embedding for Drug-Disease Prediction",
    authors: "Mansouri O., El Afia A.",
    journal: "Bioinformatics Advances",
    year: "2023",
    type: "Article",
  },
]

const projects = [
  {
    title: "SentimentDA – Analyse de sentiments en darija marocain",
    desc: "Corpus annoté et modèles fine-tunés pour l'analyse d'opinion dans les réseaux sociaux marocains.",
    partners: "Université Al Akhawayn, IRCAM",
    status: "En cours",
  },
  {
    title: "EdgeMed – IA embarquée pour le diagnostic médical",
    desc: "Déploiement de modèles de vision sur des tablettes médicales en milieu rural, en partenariat avec le Ministère de la Santé.",
    partners: "Ministère de la Santé, CHU Ibn Rochd",
    status: "En cours",
  },
  {
    title: "SmartCity Casablanca – Optimisation du trafic urbain",
    desc: "Système multi-agents pour la gestion intelligente des feux de circulation et réduction des embouteillages.",
    partners: "Casablanca Smart City Initiative",
    status: "Terminé",
  },
]

export default function RecherchePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Recherche & Innovation"
        subtitle="Le Master ISI est adossé à une équipe de recherche active dans les domaines de l'IA, de la Data Science et des systèmes intelligents."
        breadcrumb="Recherche"
      />

      {/* Stats */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {[
              { value: "8", label: "Chercheurs permanents" },
              { value: "25+", label: "Publications / an" },
              { value: "4", label: "Axes de recherche" },
              { value: "6+", label: "Projets actifs" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-3xl font-serif font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Laboratoires</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Nos laboratoires de recherche</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "limiarf", name: "LIMIARF", full: "Laboratoire d'Informatique, Modélisation et IA", director: "Pr. CHIBA Z." },
              { id: "lrit", name: "LRIT", full: "Laboratoire de Recherche en Informatique et Télécommunications", director: "Pr. RAOUYANE B." },
              { id: "lmsi", name: "LMSI", full: "Laboratoire de Mathématiques et Systèmes Intelligents", director: "Pr. CHERGUI M." },
            ].map((lab) => (
              <Link
                key={lab.id}
                href={`/recherche/${lab.id}`}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary text-lg">{lab.name}</h3>
                <p className="text-sm text-foreground font-medium mt-1">{lab.full}</p>
                <p className="text-xs text-muted-foreground mt-2">Directeur : {lab.director}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-4 group-hover:underline">
                  Voir le laboratoire <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Axes */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Thématiques</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Axes de recherche</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {axes.map((a) => (
              <div key={a.title} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${a.color} flex items-center justify-center text-2xl shrink-0`} role="img" aria-label={a.title}>
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Projets</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Projets de recherche</h2>
          </div>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "En cours" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{p.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span>Partenaires : {p.partners}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Publications</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Publications récentes</h2>
          </div>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground text-sm flex-1">{pub.title}</h3>
                    <span className="text-xs bg-secondary text-primary px-2 py-0.5 rounded font-medium shrink-0">{pub.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{pub.authors}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    <span className="italic">{pub.journal}</span>, {pub.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
