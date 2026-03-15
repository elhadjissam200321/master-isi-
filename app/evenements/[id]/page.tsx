import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, Facebook, Twitter, Linkedin, Download, CheckCircle } from "lucide-react"

const events = {
  "1": {
    title: "Journée Portes Ouvertes Master ISI 2025",
    date: "22 Mars 2025",
    time: "09h00 - 17h00",
    location: "Amphithéâtre Ibn Khaldoun, FSAC",
    type: "Portes Ouvertes",
    description: "Venez découvrir le Master ISI lors de notre journée portes ouvertes. Rencontrez les enseignants, échangez avec les étudiants actuels et découvrez nos laboratoires de recherche.",
    content: `
      <p>La Faculté des Sciences Aïn Chock vous invite à découvrir le Master en Ingénierie des Systèmes Intelligents lors de notre journée portes ouvertes annuelle.</p>
      
      <h2>Programme de la journée</h2>
      <ul>
        <li><strong>09h00 - 10h00</strong> : Accueil et café de bienvenue</li>
        <li><strong>10h00 - 11h30</strong> : Présentation du Master ISI par le coordinateur</li>
        <li><strong>11h30 - 12h30</strong> : Témoignages d'anciens étudiants</li>
        <li><strong>12h30 - 14h00</strong> : Pause déjeuner</li>
        <li><strong>14h00 - 16h00</strong> : Visite des laboratoires et démonstrations</li>
        <li><strong>16h00 - 17h00</strong> : Session de questions-réponses</li>
      </ul>
      
      <h2>Ce que vous découvrirez</h2>
      <p>Cette journée est l'occasion idéale pour :</p>
      <ul>
        <li>Rencontrer l'équipe pédagogique et les chercheurs</li>
        <li>Échanger avec les étudiants actuels du Master</li>
        <li>Découvrir nos laboratoires équipés pour l'IA et le Machine Learning</li>
        <li>Poser toutes vos questions sur le programme et les débouchés</li>
        <li>Obtenir des informations sur la procédure de candidature</li>
      </ul>
      
      <h2>Inscription</h2>
      <p>L'inscription est gratuite mais obligatoire pour des raisons d'organisation. Merci de vous inscrire avant le 20 mars 2025.</p>
    `,
    capacity: 150,
    registered: 89,
    image: "/images/hero-neural.jpg",
    organizer: "Coordination Master ISI",
    contact: "master-isi@fsac.ac.ma",
  },
  "2": {
    title: "Séminaire : LLM et Applications Industrielles",
    date: "28 Mars 2025",
    time: "14h00 - 16h00",
    location: "Salle de conférence, Bâtiment Master",
    type: "Séminaire",
    description: "Le Pr. CHIBA présentera les dernières avancées dans le domaine des Large Language Models et leurs applications dans l'industrie marocaine.",
    content: `
      <p>Ce séminaire explorera les avancées récentes dans le domaine des Large Language Models (LLM) et leurs applications concrètes dans le contexte industriel marocain.</p>
      
      <h2>Contenu du séminaire</h2>
      <ul>
        <li>Introduction aux architectures Transformer et GPT</li>
        <li>État de l'art des LLM en 2025</li>
        <li>Fine-tuning et adaptation aux cas d'usage spécifiques</li>
        <li>Études de cas : applications dans l'industrie marocaine</li>
        <li>Défis et perspectives futures</li>
      </ul>
      
      <h2>À propos de l'intervenant</h2>
      <p>Le Pr. CHIBA est enseignant-chercheur au département d'informatique de la FSAC, spécialisé en Intelligence Artificielle et Machine Learning. Il dirige plusieurs projets de recherche en NLP et a publié de nombreux articles dans des revues internationales.</p>
      
      <h2>Public cible</h2>
      <p>Ce séminaire s'adresse aux étudiants du Master ISI, aux doctorants, aux chercheurs et aux professionnels intéressés par les applications de l'IA.</p>
    `,
    capacity: 50,
    registered: 42,
    image: "/images/hero-neural.jpg",
    organizer: "Pr. CHIBA",
    contact: "chiba@fsac.ac.ma",
  },
  "3": {
    title: "Workshop : Développement d'Agents IA avec LangChain",
    date: "5 Avril 2025",
    time: "09h00 - 17h00",
    location: "Laboratoire d'informatique, FSAC",
    type: "Workshop",
    description: "Workshop pratique de développement d'agents IA autonomes utilisant LangChain et les modèles de langage. Places limitées à 25 participants.",
    content: `
      <p>Ce workshop intensif d'une journée vous permettra de maîtriser les concepts et techniques de développement d'agents IA autonomes avec LangChain.</p>
      
      <h2>Prérequis</h2>
      <ul>
        <li>Connaissance de Python (niveau intermédiaire)</li>
        <li>Notions de base en Machine Learning</li>
        <li>Ordinateur portable avec Python 3.10+ installé</li>
      </ul>
      
      <h2>Programme</h2>
      <ul>
        <li><strong>Matin</strong> : Introduction à LangChain, chaînes et prompts</li>
        <li><strong>Après-midi</strong> : Développement d'agents, mémoire et outils</li>
        <li><strong>Fin de journée</strong> : Projet pratique et déploiement</li>
      </ul>
      
      <h2>Ce que vous apprendrez</h2>
      <ul>
        <li>Architecture et composants de LangChain</li>
        <li>Création de chaînes de traitement NLP</li>
        <li>Développement d'agents IA autonomes</li>
        <li>Intégration avec différents LLM</li>
        <li>Bonnes pratiques de déploiement</li>
      </ul>
    `,
    capacity: 25,
    registered: 23,
    image: "/images/hero-neural.jpg",
    organizer: "Pr. SAOUDI",
    contact: "saoudi@fsac.ac.ma",
  },
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }))
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events[id as keyof typeof events]

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Événement non trouvé</h1>
            <Link href="/evenements" className="text-primary hover:underline">
              Retour aux événements
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const spotsLeft = event.capacity - event.registered

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[35vh] min-h-[280px] bg-primary">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <Link
                href="/evenements"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux événements
              </Link>
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                {event.type}
              </span>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4 text-balance">
                {event.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main content */}
            <div>
              {/* Quick info */}
              <div className="flex flex-wrap gap-4 mb-8 p-4 bg-secondary rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{event.capacity} places</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">{event.description}</p>
              </div>

              {/* Full content */}
              <article
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Registration card */}
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Inscription</h3>
                
                {/* Capacity bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{event.registered} inscrits</span>
                    <span className="text-primary font-medium">{spotsLeft} places restantes</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity mb-3">
                  <CheckCircle className="w-4 h-4" />
                  S'inscrire à l'événement
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm">
                  <Download className="w-4 h-4" />
                  Ajouter au calendrier
                </button>

                {/* Organizer */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Organisé par</p>
                  <p className="text-sm font-medium text-foreground">{event.organizer}</p>
                  <p className="text-sm text-primary">{event.contact}</p>
                </div>

                {/* Share */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Share2 className="w-3 h-3" />
                    Partager
                  </p>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-md bg-[#1877f2] text-white hover:opacity-90 transition-opacity">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md bg-[#1da1f2] text-white hover:opacity-90 transition-opacity">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md bg-[#0077b5] text-white hover:opacity-90 transition-opacity">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
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
