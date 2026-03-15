import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Clock, BookOpen, Tag } from "lucide-react"

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

type Course = {
  code: string
  title: string
  credits: number
  hours: number
  semester: number
  category: string
  description: string
}

const courses: Course[] = [
  // S1
  { code: "ISI-101", title: "Mathématiques pour l'IA", credits: 6, hours: 60, semester: 1, category: "Fondements", description: "Algèbre linéaire, calcul différentiel, probabilités et statistiques appliquées à l'IA." },
  { code: "ISI-102", title: "Fondements du Machine Learning", credits: 6, hours: 54, semester: 1, category: "ML", description: "Modèles linéaires, arbres de décision, SVM, validation croisée et métriques d'évaluation." },
  { code: "ISI-103", title: "Programmation Python & Data Science", credits: 5, hours: 48, semester: 1, category: "Outils", description: "NumPy, Pandas, Scikit-learn, Jupyter, bonnes pratiques de développement." },
  { code: "ISI-104", title: "Bases de données & Big Data", credits: 5, hours: 48, semester: 1, category: "Data", description: "SQL/NoSQL, Hadoop, Spark, architecture des systèmes distribués." },
  { code: "ISI-105", title: "Traitement du Signal & Images", credits: 4, hours: 36, semester: 1, category: "Signal", description: "Filtrage, transformées, segmentation et pré-traitement pour les applications IA." },
  { code: "ISI-106", title: "Anglais Scientifique et Technique", credits: 4, hours: 30, semester: 1, category: "Langues", description: "Rédaction d'articles scientifiques, présentations techniques en anglais." },
  // S2
  { code: "ISI-201", title: "Deep Learning & Réseaux de Neurones", credits: 6, hours: 60, semester: 2, category: "DL", description: "CNN, RNN, LSTM, Transformers. Implémentation avec TensorFlow et PyTorch." },
  { code: "ISI-202", title: "Traitement Automatique du Langage (NLP)", credits: 5, hours: 48, semester: 2, category: "NLP", description: "Tokenisation, word embeddings, modèles Seq2Seq, BERT, GPT et applications." },
  { code: "ISI-203", title: "Vision par Ordinateur", credits: 5, hours: 48, semester: 2, category: "Vision", description: "Détection d'objets, segmentation sémantique, reconnaissance faciale, OpenCV." },
  { code: "ISI-204", title: "Systèmes Multi-Agents", credits: 4, hours: 36, semester: 2, category: "Systèmes", description: "Agents intelligents, protocoles de communication, systèmes coopératifs." },
  { code: "ISI-205", title: "Cloud Computing & Déploiement IA", credits: 5, hours: 45, semester: 2, category: "Infra", description: "AWS, Azure, GCP, Docker, Kubernetes, MLOps et pipelines de déploiement." },
  { code: "ISI-206", title: "Éthique de l'IA & Réglementation", credits: 5, hours: 30, semester: 2, category: "Éthique", description: "Biais algorithmiques, RGPD, IA responsable et gouvernance des données." },
  // S3
  { code: "ISI-301", title: "Apprentissage par Renforcement", credits: 6, hours: 54, semester: 3, category: "RL", description: "Q-learning, Deep RL, politiques de décision et environnements OpenAI Gym." },
  { code: "ISI-302", title: "IoT & Systèmes Embarqués Intelligents", credits: 5, hours: 48, semester: 3, category: "IoT", description: "Raspberry Pi, Arduino, Edge AI, MQTT et architectures IoT-IA." },
  { code: "ISI-303", title: "Fouille de Données & Knowledge Discovery", credits: 5, hours: 45, semester: 3, category: "Data Mining", description: "Clustering, association rules, anomaly detection, graph mining." },
  { code: "ISI-304", title: "Systèmes de Recommandation", credits: 4, hours: 36, semester: 3, category: "Applications", description: "Filtrage collaboratif, content-based filtering, matrix factorization." },
  { code: "ISI-305", title: "Sécurité des Systèmes Intelligents", credits: 4, hours: 36, semester: 3, category: "Sécurité", description: "Adversarial attacks, robustesse des modèles, vie privée dans l'apprentissage." },
  { code: "ISI-306", title: "Projet de Recherche Encadré", credits: 6, hours: 60, semester: 3, category: "Projet", description: "Projet personnel encadré par un chercheur, publication scientifique visée." },
  // S4
  { code: "ISI-401", title: "Stage / Mémoire de Recherche", credits: 30, hours: 0, semester: 4, category: "Stage", description: "Stage de 5 à 6 mois en entreprise ou mémoire de recherche, suivi par un encadrant pédagogique." },
]

const categories = Array.from(new Set(courses.map((c) => c.category)))
const semesters = [1, 2, 3, 4]

const semesterLabels: Record<number, string> = {
  1: "Semestre 1 – Fondements",
  2: "Semestre 2 – Spécialisation",
  3: "Semestre 3 – Approfondissement",
  4: "Semestre 4 – Stage / Mémoire",
}

const semesterColors: Record<number, { border: string; badge: string }> = {
  1: { border: "border-primary", badge: "bg-primary text-white" },
  2: { border: "border-accent", badge: "bg-accent text-white" },
  3: { border: "border-primary", badge: "bg-primary text-white" },
  4: { border: "border-accent", badge: "bg-accent text-white" },
}

export default function CoursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Modules & Cours"
        subtitle="Détail des enseignements dispensés dans le cadre du Master ISI, organisés par semestre et par domaine."
        breadcrumb="Cours"
      />

      {/* Summary */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 items-center justify-center md:justify-start text-sm">
          {[
            { label: "Total modules", value: `${courses.length}` },
            { label: "Modules S1", value: `${courses.filter(c=>c.semester===1).length}` },
            { label: "Modules S2", value: `${courses.filter(c=>c.semester===2).length}` },
            { label: "Modules S3", value: `${courses.filter(c=>c.semester===3).length}` },
            { label: "Stage / Mémoire S4", value: "1" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">{item.value}</span>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Courses grouped by semester */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {semesters.map((sem) => {
            const semCourses = courses.filter((c) => c.semester === sem)
            const colors = semesterColors[sem]
            return (
              <div key={sem}>
                <div className={`flex items-center gap-3 mb-6 pb-3 border-b-2 ${colors.border}`}>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge}`}>
                    {semesterLabels[sem]}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {semCourses.map((course) => (
                    <div
                      key={course.code}
                      className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                          {course.code}
                        </span>
                        <span className="text-xs font-semibold text-primary">{course.credits} crédits</span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm leading-snug">{course.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{course.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          <span>{course.category}</span>
                        </div>
                        {course.hours > 0 && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{course.hours}h</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
