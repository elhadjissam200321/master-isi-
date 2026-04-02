import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { getViews } from "@/lib/views"
import { articles } from "@/data/articles"
import AnimatedPartners from "@/components/animated-partners"
import { Reveal } from "@/components/reveal"
import {
  Brain,
  Database,
  TrendingUp,
  Network,
  Award,
  Users,
  Target,
  BookOpen,
  FlaskConical,
  ChevronRight,
  GraduationCap,
  Cpu,
  BarChart2,
  Eye,
  Calendar,
  Quote,
  Building2,
  Star,
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

const alumni = [
  {
    name: "ABBA MOHSSINE",
    promo: "2025",
    role: "Data Scientist",
    company: "OCP Group",
    review: "Le Master ISI m'a fourni les compétences solides en IA et Machine Learning qui m'ont permis de relever les défis technologiques chez OCP.",
    avatar: "AM",
  },
  {
    name: "AYA BECHCHAR",
    promo: "2025",
    role: "Ingénieure IA",
    company: "Attijariwafa bank",
    review: "Une formation d'excellence avec des projets concrets. La combinaison théorie-pratique m'a préparée parfaitement au monde professionnel.",
    avatar: "AB",
  },
  {
    name: "YASSINE GOUCH",
    promo: "2025",
    role: "ML Engineer",
    company: "Avansecret",
    review: "Les laboratoires bien équipés et l'encadrement des enseignants m'ont permis de développer des compétences avancées en Deep Learning.",
    avatar: "YG",
  },
  {
    name: "HIBA NASSI",
    promo: "2025",
    role: "Data Analyst",
    company: "Société Générale",
    review: "Le réseau alumni et les partenariats avec les entreprises m'ont facilité l'accès à des opportunités professionnelles de qualité.",
    avatar: "HN",
  },
]

const partners = [
  { name: "Partenaire 1", placeholder: true },
  { name: "Partenaire 2", placeholder: true },
  { name: "Partenaire 3", placeholder: true },
  { name: "Partenaire 4", placeholder: true },
  { name: "Partenaire 5", placeholder: true },
  { name: "Partenaire 6", placeholder: true },
]

// Data is now imported from @/data/articles

export default async function HomePage() {
  const views = await getViews()

  const newsWithViews = Object.values(articles).slice(0, 4).map(item => ({
    ...item,
    desc: item.excerpt, // Map excerpt to desc for homepage UI
    tag: item.category, // Map category to tag
    views: views[item.slug] || item.views || 0
  }))
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
          sizes="100vw"
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
                className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2 font-serif uppercase tracking-wider text-sm"
              >
                Candidater maintenant
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programme"
                className="border border-white/40 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-serif uppercase tracking-wider text-sm"
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
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} direction="up">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary border border-border">
                  <s.icon className="w-8 h-8 text-primary mb-3" />
                  <span className="text-3xl font-bold text-primary font-serif">{s.value}</span>
                  <span className="text-sm text-muted-foreground mt-1">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Domaines de formation</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 text-balance">
                4 axes technologiques d&apos;excellence
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                Le Master ISI couvre les disciplines fondamentales des systèmes intelligents pour former des ingénieurs polyvalents et opérationnels.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} direction="up">
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all h-full">
                  <div className={`w-12 h-12 rounded-lg ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <p.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2 font-serif">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MASTER ISI ── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Pourquoi nous choisir</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
                  Une formation d&apos;excellence ancrée dans le monde professionnel
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Accompagnement personnalisé par des experts et académiciens" },
                    { icon: Target, text: "Curriculum aligné sur les besoins actuels du marché de l'IA" },
                    { icon: Cpu, text: "Projets réels avec des entreprises tech partenaires de Casablanca" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">{item.text}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/programme"
                  className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-serif uppercase tracking-wider"
                >
                  Voir le programme complet
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="Étudiants en collaboration"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
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
            {newsWithViews.map((n) => (
              <Link
                key={n.title}
                href={`/actualites/${n.slug}`}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={n.image || "/images/hero-neural.jpg"}
                    alt={n.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-primary/90 text-white backdrop-blur-sm uppercase tracking-wider">
                      {n.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {n.date}
                    </span>
                    <span className="flex items-center gap-1 border-l border-border pl-3">
                      <Eye className="w-3.5 h-3.5" />
                      {n.views} vues
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg leading-snug font-serif group-hover:text-primary transition-colors line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                    {n.desc}
                  </p>
                  <div className="pt-2 border-t border-border mt-auto">
                    <span className="text-xs text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
                      Lire l&apos;article <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI TESTIMONIALS ── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Témoignages</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 text-balance">
                Nos alumni parlent de nous
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                Découvrez les parcours réussis de nos anciens étudiants intégrés dans les meilleures entreprises.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((a, i) => (
              <Reveal key={a.name} delay={i * 100} direction="up">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 italic">
                    &ldquo;{a.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                      {a.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{a.name}</p>
                      <p className="text-xs text-muted-foreground">Promotion {a.promo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{a.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary font-medium mt-1">
                    <span>{a.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/alumni"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm uppercase tracking-wider"
            >
              Voir tous les témoignages <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS & SCHOLARSHIPS ── */}
      {/* ── PARTNERS ── */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Partenariats</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 text-balance">
                Nos partenaires industriels
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                Le Master ISI bénéficie du soutien d&apos;entreprises et d&apos;organisations de premier plan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} direction="up">
            <AnimatedPartners />
          </Reveal>
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
              className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2 font-serif uppercase tracking-wider text-sm"
            >
              Déposer ma candidature
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-serif uppercase tracking-wider text-sm"
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
