import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Clock, Award, BookOpen, Users, GraduationCap, Cpu, Globe, ChevronDown } from "lucide-react"

function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle: string; breadcrumb: string }) {
  return (
    <section className="bg-primary py-14 relative overflow-hidden">
      {/* subtle node lines */}
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

const objectives = [
  "Former des ingénieurs spécialisés en Intelligence Artificielle et systèmes intelligents",
  "Développer des compétences en Machine Learning, Deep Learning et traitement de données massives",
  "Maîtriser les outils et frameworks de référence : Python, TensorFlow, PyTorch, Spark",
  "Conduire et participer à des projets de recherche appliquée",
  "Intégrer des équipes pluridisciplinaires dans les secteurs industrie, finance, santé, et e-gouvernement",
  "Concevoir, déployer et maintenir des systèmes intelligents en production",
]

const structure = [
  {
    semester: "Semestre 1",
    color: "border-primary",
    bg: "bg-primary/5",
    badge: "bg-primary text-white",
    modules: [
      "Mathématiques pour l'IA (Algèbre linéaire, Probabilités)",
      "Fondements du Machine Learning",
      "Programmation Python & Outils Data Science",
      "Bases de données avancées & Big Data",
      "Traitement du Signal et des Images",
      "Anglais scientifique et technique",
    ],
  },
  {
    semester: "Semestre 2",
    color: "border-accent",
    bg: "bg-accent/5",
    badge: "bg-accent text-white",
    modules: [
      "Deep Learning & Réseaux de Neurones",
      "Traitement Automatique du Langage (NLP)",
      "Vision par Ordinateur",
      "Systèmes Multi-Agents",
      "Cloud Computing & Déploiement IA",
      "Éthique de l'IA et Réglementation",
    ],
  },
  {
    semester: "Semestre 3",
    color: "border-primary",
    bg: "bg-primary/5",
    badge: "bg-primary text-white",
    modules: [
      "Apprentissage par Renforcement",
      "IoT & Systèmes Embarqués Intelligents",
      "Fouille de données & Knowledge Discovery",
      "Systèmes de Recommandation",
      "Sécurité des systèmes intelligents",
      "Projet de recherche encadré",
    ],
  },
  {
    semester: "Semestre 4",
    color: "border-accent",
    bg: "bg-accent/5",
    badge: "bg-accent text-white",
    modules: ["Stage en entreprise ou mémoire de recherche (5–6 mois)", "Soutenance devant jury"],
  },
]

export default function ProgrammePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Présentation du Master ISI"
        subtitle="Master en Ingénierie des Systèmes Intelligents – Diplôme national de Master accrédité par le Ministère de l'Enseignement Supérieur."
        breadcrumb="Programme"
      />

      {/* Quick info */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {[
              { icon: Clock, label: "Durée", value: "2 ans (4 semestres)" },
              { icon: Award, label: "Diplôme", value: "Master national accrédité" },
              { icon: BookOpen, label: "Crédits", value: "120 crédits ECTS" },
              { icon: Users, label: "Capacité", value: "25–30 étudiants/an" },
              { icon: Globe, label: "Langue", value: "Français / Anglais" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Objectifs</span>
              <h2 className="font-serif text-3xl font-bold text-foreground mt-2 mb-6">Compétences visées</h2>
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Débouchés</span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Perspectives professionnelles</h2>
              {[
                { role: "Ingénieur IA / Data Scientist", sectors: "Technologie, Finance, Santé" },
                { role: "Machine Learning Engineer", sectors: "Startups, Grands groupes" },
                { role: "Chercheur en Systèmes Intelligents", sectors: "Universités, Centres R&D" },
                { role: "Architecte Systèmes IA", sectors: "Télécoms, Industrie, Gouvernement" },
                { role: "Consultant en Transformation Numérique", sectors: "Conseil, ESN" },
              ].map((d) => (
                <div key={d.role} className="flex items-center justify-between p-4 rounded-lg bg-secondary border border-border">
                  <div>
                    <div className="font-semibold text-sm text-foreground">{d.role}</div>
                    <div className="text-xs text-muted-foreground">{d.sectors}</div>
                  </div>
                  <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structure semestres */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Organisation</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Structure semestrielle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {structure.map((s) => (
              <div key={s.semester} className={`rounded-xl border-l-4 ${s.color} ${s.bg} bg-card p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${s.badge}`}>{s.semester}</span>
                </div>
                <ul className="space-y-2">
                  {s.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cours"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Voir le détail des cours <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
