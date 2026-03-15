import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Calendar, MapPin, Clock, Users, ArrowRight, CalendarDays } from "lucide-react"

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

const upcomingEvents = [
  {
    id: 1,
    title: "Journée Portes Ouvertes Master ISI 2025",
    date: "22 Mars 2025",
    time: "09h00 - 17h00",
    location: "Amphithéâtre Ibn Khaldoun, FSAC",
    type: "Portes Ouvertes",
    description: "Venez découvrir le Master ISI lors de notre journée portes ouvertes. Rencontrez les enseignants, échangez avec les étudiants actuels et découvrez nos laboratoires de recherche.",
    featured: true,
  },
  {
    id: 2,
    title: "Séminaire : LLM et Applications Industrielles",
    date: "28 Mars 2025",
    time: "14h00 - 16h00",
    location: "Salle de conférence, Bâtiment Master",
    type: "Séminaire",
    description: "Le Pr. CHIBA présentera les dernières avancées dans le domaine des Large Language Models et leurs applications dans l'industrie marocaine.",
    featured: true,
  },
  {
    id: 3,
    title: "Workshop : Développement d'Agents IA avec LangChain",
    date: "5 Avril 2025",
    time: "09h00 - 17h00",
    location: "Laboratoire d'informatique, FSAC",
    type: "Workshop",
    description: "Workshop pratique de développement d'agents IA autonomes utilisant LangChain et les modèles de langage. Places limitées à 25 participants.",
    featured: false,
  },
  {
    id: 4,
    title: "Conférence : Cybersécurité et IA",
    date: "12 Avril 2025",
    time: "10h00 - 12h00",
    location: "Amphithéâtre Central, FSAC",
    type: "Conférence",
    description: "Conférence sur l'intersection entre la cybersécurité et l'intelligence artificielle, animée par des experts du domaine.",
    featured: false,
  },
  {
    id: 5,
    title: "Hackathon IA Maroc 2025",
    date: "19-20 Avril 2025",
    time: "48h non-stop",
    location: "Campus FSAC",
    type: "Hackathon",
    description: "Compétition de 48 heures pour développer des solutions IA innovantes. Ouvert aux étudiants de tous les établissements. Prix à la clé !",
    featured: false,
  },
]

const pastEvents = [
  {
    id: 101,
    title: "Visite d'entreprise : Microsoft Maroc",
    date: "15 Janvier 2025",
    type: "Visite",
    participants: 30,
  },
  {
    id: 102,
    title: "Workshop Deep Learning avec PyTorch",
    date: "25-26 Janvier 2025",
    type: "Workshop",
    participants: 25,
  },
  {
    id: 103,
    title: "Séminaire : Introduction à l'IA Agentique",
    date: "20 Février 2025",
    type: "Séminaire",
    participants: 50,
  },
  {
    id: 104,
    title: "Rencontre Alumni Master ISI",
    date: "10 Décembre 2024",
    type: "Networking",
    participants: 80,
  },
  {
    id: 105,
    title: "Journée de l'Innovation IA",
    date: "15 Novembre 2024",
    type: "Conférence",
    participants: 120,
  },
]

const eventTypes = [
  { name: "Séminaire", color: "bg-blue-600" },
  { name: "Workshop", color: "bg-teal-600" },
  { name: "Conférence", color: "bg-indigo-600" },
  { name: "Hackathon", color: "bg-orange-600" },
  { name: "Portes Ouvertes", color: "bg-primary" },
]

export default function EvenementsPage() {
  const featuredEvents = upcomingEvents.filter(e => e.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Événements"
        subtitle="Séminaires, workshops, conférences et événements organisés par le Master ISI. Restez connecté à notre communauté."
        breadcrumb="Événements"
      />

      {/* Event Types */}
      <section className="py-6 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              Tous les événements
            </button>
            {eventTypes.map((type) => (
              <button
                key={type.name}
                className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-foreground hover:bg-background transition-colors"
              >
                <span className={`inline-block w-2 h-2 rounded-full ${type.color} mr-2`} />
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <CalendarDays className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">À venir</h2>
          </div>
          
          {/* Featured */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-card border-2 border-primary rounded-xl overflow-hidden group"
              >
                <div className="bg-primary text-white p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide opacity-80">{event.type}</span>
                  <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <Link href={`/evenements/${event.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                    Voir détails
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Other Upcoming Events */}
          <div className="space-y-4">
            {upcomingEvents.filter(e => !e.featured).map((event) => (
              <article
                key={event.id}
                className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-full md:w-32 text-center md:text-left">
                  <div className="text-3xl font-bold text-primary font-serif">
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.date.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-primary">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href={`/evenements/${event.id}`} className="px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                    Voir détails
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View Hint */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarDays className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Ajoutez les événements à votre calendrier</h3>
                <p className="text-sm text-muted-foreground">Synchronisez les événements du Master ISI avec Google Calendar ou Outlook</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Exporter le calendrier
            </button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Événements passés</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <article
                key={event.id}
                className="bg-card border border-border rounded-lg p-4 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    {event.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{event.date}</span>
                </div>
                <h3 className="font-medium text-foreground text-sm mb-2">{event.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  {event.participants} participants
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-sm font-medium text-primary hover:underline">
              Voir tous les événements passés
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Vous souhaitez organiser un événement ?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Proposez un séminaire, un workshop ou une conférence en partenariat avec le Master ISI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
