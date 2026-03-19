import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Mail, BookOpen, FlaskConical, Globe, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle: string; breadcrumb: string }) {
  return (
    <section className="bg-primary py-14 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {[[10, 10, 90, 90], [90, 10, 10, 90], [50, 0, 50, 100], [0, 50, 100, 50]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.5" />
        ))}
        {[[20, 20], [80, 20], [50, 50], [20, 80], [80, 80]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="white" />
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
  { name: "Pr. AZBEG KEBIRA", title: "Professeure de l'Enseignement Supérieur", role: "Enseignante-chercheuse", speciality: "Systèmes Distribués", color: "bg-accent" },
  { name: "Pr. BAHANI KHALID", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Analyse des Données", color: "bg-accent" },
  { name: "Pr. BENABDELLAH CHAOUNI SAMIA", title: "Professeure de l'Enseignement Supérieur", role: "Enseignante-chercheuse", speciality: "Recherche Scientifique, IDM", color: "bg-accent" },
  { name: "Pr. CHANYOUR TARIK", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Développement Full Stack", color: "bg-accent" },
  { name: "Pr. CHBIHI LOUHDI MOHAMMED REDA", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Web Sémantique, J2EE", color: "bg-accent" },
  { name: "Pr. CHERGUI BRAHIM", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Mathématiques des Données", color: "bg-primary" },
  { name: "Pr. CHIBA ZOUHAIR", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Machine Learning (ML)", color: "bg-primary" },
  { name: "Pr. DEHBI RACHID", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Bases de Données, Big Data", color: "bg-primary" },
  { name: "Pr. EL KASMI ALAOUI MOULAY SEDDIQ", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Programmation Python", color: "bg-primary" },
  {
    name: "Pr. ERRAIS MOHAMMED",
    title: "Professeur de l'Enseignement Supérieur",
    role: "Coordonnateur du Master ISI",
    speciality: "IoT, Cloud Computing",
    color: "bg-primary",
    isCoordinator: true,
    email: "mahammed.errais@gmail.com",
    office: "Département d'Informatique"
  },
  { name: "Pr. FETJAH LAILA", title: "Professeure de l'Enseignement Supérieur", role: "Enseignante-chercheuse", speciality: "Sécurité & Hacking", color: "bg-primary" },
  { name: "Pr. JAI ANDALOUSSI SAID", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Big Data, Multimédia", color: "bg-accent" },
  { name: "Pr. MADRANE NABIL", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Génie Logiciel, IA", color: "bg-primary" },
  { name: "Pr. OUASSIT YOUSSEF", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Microservices", color: "bg-accent" },
  { name: "Pr. RAOUYANE BRAHIM", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "Réseaux, Systèmes Distribués", color: "bg-accent" },
  { name: "Pr. SAOUDI EL MEHDI", title: "Professeur de l'Enseignement Supérieur", role: "Enseignant-chercheur", speciality: "IA Agentique", color: "bg-primary" },
]

export default function EnseignantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Équipe pédagogique"
        subtitle="Le Master ISI est animé par une équipe d'enseignants-chercheurs de haut niveau et des experts reconnus dans leurs domaines."
        breadcrumb="Enseignants"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Corps enseignant</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">{teachers.length} enseignants-chercheurs</h2>
          </div>

          {(() => {
            const coordinator = teachers.find((t) => t.isCoordinator)
            if (!coordinator) return null
            return (
              <section className="mb-16 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="relative shrink-0">
                      <Avatar 
                        name={coordinator.name.replace("Pr. ", "").replace("Mme. ", "").replace("Dr. ", "").replace("M. ", "")} 
                        color={coordinator.color} 
                      />
                      <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        Coordonnateur
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-serif text-2xl font-bold text-foreground">{coordinator.name}</h3>
                      <p className="text-primary font-semibold mt-1">{coordinator.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{coordinator.role}</p>
                      
                      <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                        En tant que Coordonnateur du Master ISI, il est responsable de la coordination pédagogique du programme, 
                        de l'encadrement des projets de recherche et du suivi des étudiants. Son expertise couvre les domaines de 
                        l'{'{IoT}'}, du Cloud Computing et des architectures distribuées.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                        {coordinator.speciality.split(", ").map((s) => (
                          <span key={s} className="text-xs bg-background text-foreground px-3 py-1.5 rounded-full border border-border font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                      
                      {coordinator.email && (
                        <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                          <Mail className="w-4 h-4 text-primary" />
                          <a href={`mailto:${coordinator.email}`} className="text-sm text-primary hover:underline">
                            {coordinator.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )
          })()}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teachers.map((t) => (
              <div key={t.name} className="relative bg-card border border-border rounded-xl p-6 flex gap-6 hover:shadow-lg hover:border-primary/20 transition-all items-center group overflow-hidden">
                {t.isCoordinator && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter z-10">
                    Coordonnateur
                  </div>
                )}
                <Avatar name={t.name.replace("Pr. ", "").replace("Mme. ", "").replace("Dr. ", "").replace("M. ", "")} color={t.color} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors font-serif">{t.name}</h3>
                  </div>
                  <p className="text-xs text-primary font-bold mt-1 uppercase tracking-wider">{t.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>

                  {t.isCoordinator && t.email && (
                    <div className="mt-3 space-y-1">
                      {t.email && (
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <Mail className="w-3 h-3 text-primary" />
                          <span>{t.email}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.speciality.split(", ").map((s) => (
                      <span key={s} className="text-[10px] bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full border border-border font-semibold">
                        {s}
                      </span>
                    ))}
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
