import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Users, BookOpen, FlaskConical, Mail, ExternalLink, Target, Lightbulb } from "lucide-react"

const researchLabs = {
  "limiarf": {
    name: "LIMIARF",
    fullName: "Laboratoire d'Informatique, Modélisation et Intelligence Artificielle",
    director: "Pr. CHIBA Zouhair",
    email: "limiarf@fsac.ac.ma",
    description: "Le LIMIARF est un laboratoire de recherche dédié à l'intelligence artificielle, au traitement du langage naturel et à l'apprentissage automatique. Nos travaux visent à développer des systèmes intelligents capables de comprendre et d'interagir avec les humains.",
    presentation: `
      <p>Fondé en 2015, le LIMIARF regroupe des chercheurs passionnés par l'intelligence artificielle et ses applications. Notre mission est de contribuer à l'avancement des connaissances en IA tout en formant la prochaine génération de chercheurs et d'ingénieurs.</p>
      
      <h2>Axes de recherche</h2>
      <p>Nos travaux s'articulent autour de quatre axes principaux :</p>
      <ul>
        <li><strong>Traitement du Langage Naturel</strong> : Développement de modèles pour l'analyse et la génération de texte en arabe et français</li>
        <li><strong>Vision par Ordinateur</strong> : Reconnaissance d'images, détection d'objets et segmentation sémantique</li>
        <li><strong>Apprentissage par Renforcement</strong> : Agents autonomes et systèmes de prise de décision</li>
        <li><strong>IA Explicable</strong> : Méthodes pour rendre les modèles d'IA plus transparents et interprétables</li>
      </ul>
      
      <h2>Équipements</h2>
      <p>Le laboratoire dispose d'infrastructures de calcul haute performance incluant :</p>
      <ul>
        <li>Cluster GPU avec 8 NVIDIA A100</li>
        <li>Serveurs de stockage haute capacité (500 TB)</li>
        <li>Plateforme cloud pour le déploiement de modèles</li>
      </ul>
    `,
    researchAreas: [
      "Traitement du Langage Naturel",
      "Deep Learning",
      "Vision par Ordinateur",
      "IA Explicable",
    ],
    members: [
      { name: "Pr. CHIBA Zouhair", role: "Directeur", specialty: "NLP, Deep Learning" },
      { name: "Pr. ANDALOUSSI Said", role: "Chercheur senior", specialty: "Computer Vision" },
      { name: "Dr. BENALI Ahmed", role: "Chercheur", specialty: "Reinforcement Learning" },
      { name: "Dr. FASSI Nadia", role: "Chercheuse", specialty: "XAI" },
    ],
    projects: [
      { name: "AraBERT-Maroc", description: "Modèle de langage pré-entraîné pour le dialecte marocain", status: "En cours" },
      { name: "MedAI-Diagnosis", description: "Système d'aide au diagnostic médical par IA", status: "En cours" },
      { name: "SmartCity-Vision", description: "Analyse vidéo intelligente pour villes connectées", status: "Terminé" },
    ],
    publications: 45,
    theses: 12,
  },
  "lrit": {
    name: "LRIT",
    fullName: "Laboratoire de Recherche en Informatique et Télécommunications",
    director: "Pr. RAOUYANE Brahim",
    email: "lrit@fsac.ac.ma",
    description: "Le LRIT se concentre sur les réseaux de nouvelle génération, l'IoT et les systèmes distribués. Nos recherches visent à améliorer la performance, la sécurité et l'efficacité des infrastructures de communication.",
    presentation: `
      <p>Le LRIT est un laboratoire multidisciplinaire qui explore les frontières des technologies de communication et des systèmes distribués. Nous collaborons étroitement avec l'industrie pour développer des solutions innovantes.</p>
      
      <h2>Axes de recherche</h2>
      <ul>
        <li><strong>Réseaux SDN/NFV</strong> : Architecture et optimisation des réseaux définis par logiciel</li>
        <li><strong>Internet des Objets</strong> : Protocoles, sécurité et applications IoT</li>
        <li><strong>Cloud Computing</strong> : Virtualisation, orchestration et edge computing</li>
        <li><strong>Cybersécurité</strong> : Détection d'intrusions et protection des infrastructures</li>
      </ul>
      
      <h2>Partenariats</h2>
      <p>Le laboratoire collabore avec plusieurs entreprises et institutions :</p>
      <ul>
        <li>Maroc Telecom - Projets 5G et IoT</li>
        <li>OCP Group - Smart Mining</li>
        <li>CNRST - Programmes de recherche nationaux</li>
      </ul>
    `,
    researchAreas: [
      "Réseaux SDN/NFV",
      "Internet des Objets",
      "Cloud Computing",
      "Cybersécurité",
    ],
    members: [
      { name: "Pr. RAOUYANE Brahim", role: "Directeur", specialty: "SDN, 5G Networks" },
      { name: "Pr. ERRAIS Khalid", role: "Chercheur senior", specialty: "IoT, Cloud" },
      { name: "Pr. FEJTAH Nabil", role: "Chercheur senior", specialty: "Cybersecurity" },
      { name: "Dr. KEBIRA Hassan", role: "Chercheur", specialty: "Distributed Systems" },
    ],
    projects: [
      { name: "5G-Maroc", description: "Déploiement pilote 5G avec Maroc Telecom", status: "En cours" },
      { name: "SmartGrid-IoT", description: "Gestion intelligente des réseaux électriques", status: "En cours" },
      { name: "SecureCloud", description: "Plateforme cloud sécurisée pour PME", status: "Terminé" },
    ],
    publications: 38,
    theses: 9,
  },
  "lmsi": {
    name: "LMSI",
    fullName: "Laboratoire de Mathématiques et Systèmes Intelligents",
    director: "Pr. CHERGUI Mohamed",
    email: "lmsi@fsac.ac.ma",
    description: "Le LMSI combine les mathématiques appliquées et l'informatique pour développer des algorithmes d'optimisation et des systèmes d'aide à la décision basés sur l'IA.",
    presentation: `
      <p>Le LMSI est un laboratoire interdisciplinaire qui fait le pont entre les mathématiques fondamentales et les applications en intelligence artificielle. Nos travaux théoriques trouvent des applications dans l'industrie et la recherche.</p>
      
      <h2>Axes de recherche</h2>
      <ul>
        <li><strong>Optimisation</strong> : Algorithmes métaheuristiques et optimisation combinatoire</li>
        <li><strong>Data Science</strong> : Analyse statistique et fouille de données</li>
        <li><strong>Modélisation</strong> : Simulation et modèles mathématiques</li>
        <li><strong>Aide à la décision</strong> : Systèmes experts et analyse multicritère</li>
      </ul>
      
      <h2>Applications</h2>
      <p>Nos recherches ont des applications dans de nombreux domaines :</p>
      <ul>
        <li>Logistique et supply chain</li>
        <li>Finance et gestion des risques</li>
        <li>Santé et épidémiologie</li>
        <li>Environnement et développement durable</li>
      </ul>
    `,
    researchAreas: [
      "Optimisation",
      "Data Science",
      "Modélisation Mathématique",
      "Aide à la Décision",
    ],
    members: [
      { name: "Pr. CHERGUI Mohamed", role: "Directeur", specialty: "Optimization" },
      { name: "Pr. BENABDELLAH Naoual", role: "Chercheuse senior", specialty: "Data Science" },
      { name: "Dr. ALAMI Youssef", role: "Chercheur", specialty: "Mathematical Modeling" },
    ],
    projects: [
      { name: "OptiLog-Maroc", description: "Optimisation logistique pour e-commerce", status: "En cours" },
      { name: "HealthPredict", description: "Modèles prédictifs en santé publique", status: "En cours" },
      { name: "FinRisk-AI", description: "Analyse de risques financiers par IA", status: "Terminé" },
    ],
    publications: 32,
    theses: 7,
  },
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return Object.keys(researchLabs).map((id) => ({ id }))
}

export default async function ResearchDetailPage({ params }: Props) {
  const { id } = await params
  const lab = researchLabs[id as keyof typeof researchLabs]

  if (!lab) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Laboratoire non trouvé</h1>
            <Link href="/recherche" className="text-primary hover:underline">
              Retour à la recherche
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-primary py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/recherche"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux laboratoires
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <FlaskConical className="w-6 h-6 text-primary-foreground/80" />
              <span className="text-primary-foreground/80 text-sm font-medium">{lab.name}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-3 text-balance">
              {lab.fullName}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl">{lab.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Main content */}
            <div>
              {/* Presentation */}
              <article
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground mb-10"
                dangerouslySetInnerHTML={{ __html: lab.presentation }}
              />

              {/* Research Areas */}
              <div className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-serif font-bold text-foreground mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  Domaines de recherche
                </h2>
                <div className="flex flex-wrap gap-2">
                  {lab.researchAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-10">
                <h2 className="flex items-center gap-2 text-xl font-serif font-bold text-foreground mb-4">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Projets de recherche
                </h2>
                <div className="space-y-4">
                  {lab.projects.map((project) => (
                    <div
                      key={project.name}
                      className="p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-foreground">{project.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full shrink-0 ${
                          project.status === "En cours" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div>
                <h2 className="flex items-center gap-2 text-xl font-serif font-bold text-foreground mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  Équipe de recherche
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {lab.members.map((member) => (
                    <div
                      key={member.name}
                      className="p-4 bg-secondary rounded-lg"
                    >
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Info card */}
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Informations</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Direction</p>
                    <p className="font-medium text-foreground">{lab.director}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Contact</p>
                    <a href={`mailto:${lab.email}`} className="font-medium text-primary hover:underline flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {lab.email}
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">{lab.publications}</div>
                      <div className="text-xs text-muted-foreground">Publications</div>
                    </div>
                    <div className="p-3 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">{lab.theses}</div>
                      <div className="text-xs text-muted-foreground">Thèses</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <Link
                    href="/publications"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    Voir les publications
                  </Link>
                  <a
                    href={`mailto:${lab.email}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Contacter le laboratoire
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
