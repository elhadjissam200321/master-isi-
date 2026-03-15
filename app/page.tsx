import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  Database,
  TrendingUp,
  Network,
  Award,
  Users,
  BookOpen,
  FlaskConical,
  ChevronRight,
  GraduationCap,
  Cpu,
  BarChart2,
} from "lucide-react"

// Neural network SVG background
function NeuralBg({ className = "" }: { className?: string }) {
  const nodes = [
    [10, 20], [30, 10], [55, 25], [75, 15], [90, 30],
    [15, 50], [38, 45], [62, 55], [82, 48], [95, 60],
    [5, 75], [25, 85], [50, 70], [70, 80], [88, 72],
    [20, 95], [45, 90], [65, 98], [85, 88],
  ]
  const edges: [number, number, number, number][] = [
    [10, 20, 30, 10], [30, 10, 55, 25], [55, 25, 75, 15], [75, 15, 90, 30],
    [15, 50, 38, 45], [38, 45, 62, 55], [62, 55, 82, 48], [82, 48, 95, 60],
    [5, 75, 25, 85], [25, 85, 50, 70], [50, 70, 70, 80], [70, 80, 88, 72],
    [10, 20, 15, 50], [30, 10, 38, 45], [55, 25, 62, 55], [75, 15, 82, 48],
    [15, 50, 5, 75], [38, 45, 25, 85], [62, 55, 50, 70], [82, 48, 70, 80],
    [20, 95, 5, 75], [45, 90, 25, 85], [65, 98, 50, 70], [85, 88, 70, 80],
  ]
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.3" strokeOpacity="0.25" />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.8" fill="white" fillOpacity="0.5" />
      ))}
    </svg>
  )
}

const pillars = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    desc: "Algorithmes d'IA, apprentissage profond, réseaux de neurones et systèmes experts pour résoudre des problèmes complexes.",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "Machine Learning",
    desc: "Modèles supervisés, non supervisés et par renforcement. Ingénierie des caractéristiques et optimisation de modèles.",
    color: "bg-accent",
  },
  {
    icon: Database,
    title: "Data Science",
    desc: "Collecte, traitement et analyse de données massives. Visualisation et extraction de connaissances à partir de grandes bases.",
    color: "bg-primary",
  },
  {
    icon: Network,
    title: "Systèmes Intelligents",
    desc: "Architecture de systèmes distribués et intelligents, IoT, robotique et systèmes autonomes embarqués.",
    color: "bg-accent",
  },
]

const stats = [
  { value: "2", label: "Années de formation", icon: GraduationCap },
  { value: "20+", label: "Modules spécialisés", icon: BookOpen },
  { value: "15+", label: "Enseignants-chercheurs", icon: Users },
  { value: "100+", label: "Alumni actifs", icon: Award },
]

const news = [
  {
    date: "Mars 2025",
    title: "Journée Portes Ouvertes Master ISI 2025",
    desc: "Rencontrez notre équipe pédagogique et découvrez le programme lors de notre journée d'information.",
    tag: "Événement",
  },
  {
    date: "Février 2025",
    title: "Publication dans le Journal of Intelligent Systems",
    desc: "L'équipe de recherche ISI publie un article sur l'optimisation des réseaux de neurones profonds.",
    tag: "Recherche",
  },
  {
    date: "Janvier 2025",
    title: "Partenariat avec des entreprises tech de Casablanca",
    desc: "Nouveaux partenariats pour des stages et projets de fin d'études en Intelligence Artificielle.",
    tag: "Partenariat",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-primary">
        <Image
          src="/images/hero-neural.jpg"
          alt="Neural network visualization representing AI and intelligent systems"
          fill
          className="object-cover opacity-30"
          priority
        />
        <NeuralBg className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5" />
              Diplôme National Accrédité – FSAC
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              Master en Ingénierie des Systèmes Intelligents
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
              Formez-vous aux technologies d&apos;avenir : Intelligence Artificielle, Machine Learning et Data Science.
              Une formation d&apos;excellence à la Faculté des Sciences Aïn Chock, Université Hassan II de Casablanca.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admission"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Candidater maintenant
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programme"
                className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Découvrir le programme
              </Link>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-background" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary border border-border">
                <s.icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-3xl font-bold text-primary font-serif">{s.value}</span>
                <span className="text-sm text-muted-foreground mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Domaines de formation</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 text-balance">
              4 axes technologiques d&apos;excellence
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Le Master ISI couvre les disciplines fondamentales des systèmes intelligents pour former des ingénieurs polyvalents et opérationnels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className={`w-12 h-12 rounded-lg ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MASTER ISI ── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Pourquoi nous choisir</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
                Une formation ancrée dans la recherche et l&apos;industrie
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: FlaskConical, text: "Laboratoires de recherche reconnus au niveau national et international" },
                  { icon: Cpu, text: "Projets réels avec des entreprises tech partenaires de Casablanca" },
                  { icon: BarChart2, text: "Taux d'insertion professionnelle élevé, secteurs IA, finance, santé" },
                  { icon: GraduationCap, text: "Corps enseignant composé de chercheurs et de professionnels en exercice" },
                  { icon: Network, text: "Réseau alumni actif et communauté professionnelle au Maroc et à l'international" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programme"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Voir le programme complet
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Data-science illustration */}
            <div className="relative rounded-2xl overflow-hidden bg-primary/5 border border-border p-8">
              <svg viewBox="0 0 400 320" className="w-full" aria-label="Data science and AI visual diagram">
                {/* Center node – AI */}
                <circle cx="200" cy="160" r="36" fill="hsl(240 60% 38%)" />
                <text x="200" y="155" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">SYSTÈMES</text>
                <text x="200" y="167" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">INTELLIGENTS</text>

                {/* Satellite nodes */}
                {[
                  { x: 80, y: 80, label: "IA", color: "hsl(200 60% 45%)" },
                  { x: 320, y: 80, label: "ML", color: "hsl(240 55% 50%)" },
                  { x: 60, y: 240, label: "Data", color: "hsl(200 60% 45%)" },
                  { x: 340, y: 240, label: "IoT", color: "hsl(240 55% 50%)" },
                  { x: 200, y: 40, label: "NLP", color: "hsl(220 60% 42%)" },
                  { x: 200, y: 280, label: "Vision", color: "hsl(220 60% 42%)" },
                ].map((n) => (
                  <g key={n.label}>
                    <line x1={n.x} y1={n.y} x2="200" y2="160" stroke="hsl(240 60% 38%)" strokeWidth="1.5" strokeOpacity="0.3" />
                    <circle cx={n.x} cy={n.y} r="22" fill={n.color} />
                    <text x={n.x} y={n.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">{n.label}</text>
                  </g>
                ))}
                {/* Outer ring dots */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i / 12) * Math.PI * 2
                  const rx = 170, ry = 130
                  const x = 200 + rx * Math.cos(angle)
                  const y = 160 + ry * Math.sin(angle)
                  return <circle key={i} cx={x} cy={y} r="3" fill="hsl(240 60% 38%)" fillOpacity="0.2" />
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Actualités</span>
              <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Dernières nouvelles</h2>
            </div>
            <Link href="/actualites" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
              Toutes les actus <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n) => (
              <article key={n.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary text-primary">{n.tag}</span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="font-semibold text-foreground text-base leading-snug">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{n.desc}</p>
                <span className="text-xs text-primary font-medium flex items-center gap-1 hover:underline cursor-pointer">
                  Lire la suite <ChevronRight className="w-3 h-3" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4 text-balance">
            Rejoignez la prochaine promotion du Master ISI
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Les candidatures pour l&apos;année universitaire 2025-2026 sont ouvertes. Déposez votre dossier avant la date limite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admission"
              className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              Déposer ma candidature
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
