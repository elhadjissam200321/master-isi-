import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Mail, BookOpen, FlaskConical, Globe } from "lucide-react"

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

// Avatar placeholder using SVG initials
function Avatar({ name, color = "bg-primary" }: { name: string; color?: string }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("")
  return (
    <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center text-white font-bold text-xl font-serif shrink-0`} aria-label={`Photo de ${name}`}>
      {initials}
    </div>
  )
}

const teachers = [
  {
    name: "Pr. Rachid El Afia",
    title: "Professeur de l'Enseignement Supérieur",
    role: "Responsable du Master ISI",
    speciality: "Intelligence Artificielle, Apprentissage Profond",
    email: "r.elafia@fsac.ac.ma",
    courses: ["Deep Learning", "Fondements du ML"],
    pubCount: 35,
    color: "bg-primary",
  },
  {
    name: "Pr. Khadija Lahlou",
    title: "Professeure de l'Enseignement Supérieur",
    role: "Enseignante-chercheuse",
    speciality: "Systèmes Multi-Agents, IoT",
    email: "k.lahlou@fsac.ac.ma",
    courses: ["Systèmes Multi-Agents", "IoT Intelligents"],
    pubCount: 28,
    color: "bg-accent",
  },
  {
    name: "Dr. Mohamed Chaouni",
    title: "Maître de Conférences",
    role: "Enseignant-chercheur",
    speciality: "Vision par Ordinateur, Edge AI",
    email: "m.chaouni@fsac.ac.ma",
    courses: ["Vision par Ordinateur", "Systèmes Embarqués"],
    pubCount: 18,
    color: "bg-primary",
  },
  {
    name: "Dr. Oumaima Mansouri",
    title: "Maître de Conférences",
    role: "Enseignante-chercheuse",
    speciality: "NLP, Traitement de l'arabe",
    email: "o.mansouri@fsac.ac.ma",
    courses: ["NLP", "Fouille de données"],
    pubCount: 22,
    color: "bg-accent",
  },
  {
    name: "Dr. Ibrahim Chaouabi",
    title: "Maître Assistant",
    role: "Enseignant-chercheur",
    speciality: "Big Data, Cloud Computing",
    email: "i.chaouabi@fsac.ac.ma",
    courses: ["Big Data", "Cloud & MLOps"],
    pubCount: 14,
    color: "bg-primary",
  },
  {
    name: "Mme. Sanaa Benkhalil",
    title: "Intervenante professionnelle",
    role: "Data Scientist – OCP SA",
    speciality: "Data Engineering, Analytics",
    email: "s.benkhalil@ocp.ma",
    courses: ["Data Science appliquée"],
    pubCount: 0,
    color: "bg-accent",
  },
  {
    name: "M. Youssef Berri",
    title: "Intervenant professionnel",
    role: "ML Engineer – OrangeMaroc",
    speciality: "MLOps, Déploiement de modèles",
    email: "y.berri@orangemaroc.ma",
    courses: ["Cloud & Déploiement IA"],
    pubCount: 0,
    color: "bg-primary",
  },
  {
    name: "Dr. Nadia El Filali",
    title: "Maître de Conférences",
    role: "Enseignante-chercheuse",
    speciality: "Apprentissage par Renforcement, Jeux",
    email: "n.elfilali@fsac.ac.ma",
    courses: ["Apprentissage par Renforcement"],
    pubCount: 11,
    color: "bg-accent",
  },
]

export default function EnseignantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Équipe pédagogique"
        subtitle="Le Master ISI est animé par des enseignants-chercheurs de haut niveau et des experts professionnels issus du secteur technologique."
        breadcrumb="Enseignants"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Corps enseignant</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">{teachers.length} enseignants & intervenants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teachers.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-6 flex gap-5 hover:shadow-md transition-shadow">
                <Avatar name={t.name} color={t.color} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-base">{t.name}</h3>
                  <p className="text-xs text-primary font-semibold mt-0.5">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.speciality.split(", ").map((s) => (
                      <span key={s} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.courses.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <a href={`mailto:${t.email}`} className="hover:text-primary truncate">{t.email}</a>
                    </div>
                    {t.pubCount > 0 && (
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <FlaskConical className="w-3.5 h-3.5 shrink-0" />
                        <span>{t.pubCount} publications scientifiques</span>
                      </div>
                    )}
                  </div>
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
