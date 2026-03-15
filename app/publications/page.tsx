import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, FileText, ExternalLink, BookOpen, Users, Calendar, Download, Filter } from "lucide-react"

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
          <Link href="/recherche" className="hover:text-white">Recherche</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/90">{breadcrumb}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">{title}</h1>
        <p className="text-white/75 mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  )
}

const publications = [
  {
    id: 1,
    slug: "deep-learning-nlp-2024",
    title: "Deep Learning Approaches for Anomaly Detection in Industrial IoT Systems",
    authors: ["A. ANDALOUSSI", "M. ERRAIS", "K. CHIBA"],
    journal: "IEEE Transactions on Industrial Informatics",
    year: 2025,
    type: "Journal",
    doi: "10.1109/TII.2025.XXXXXX",
    abstract: "This paper presents a novel deep learning framework for real-time anomaly detection in Industrial Internet of Things (IIoT) systems. Our approach combines convolutional neural networks with attention mechanisms to achieve state-of-the-art performance.",
    keywords: ["Deep Learning", "IoT", "Anomaly Detection", "Industrial Systems"],
  },
  {
    id: 2,
    title: "Optimisation des Requêtes dans les Bases de Données Distribuées avec Machine Learning",
    authors: ["R. DEHBI", "S. BENABDELLAH"],
    journal: "Revue d'Intelligence Artificielle",
    year: 2025,
    type: "Journal",
    doi: "10.18280/ria.XXXXX",
    abstract: "Nous proposons une nouvelle approche basée sur l'apprentissage automatique pour optimiser les requêtes dans les systèmes de bases de données distribuées, réduisant significativement les temps de réponse.",
    keywords: ["Machine Learning", "Bases de données", "Optimisation", "Systèmes distribués"],
  },
  {
    id: 3,
    title: "Secure Microservices Architecture for Cloud-Native Applications",
    authors: ["Y. OUASSIT", "K. FEJTAH"],
    journal: "International Conference on Cloud Computing (ICCC 2024)",
    year: 2024,
    type: "Conference",
    doi: "10.1145/XXXXXXX",
    abstract: "This paper introduces a security-first approach to designing microservices architectures for cloud-native applications, addressing key challenges in authentication, authorization, and data protection.",
    keywords: ["Microservices", "Cloud Security", "DevSecOps", "Architecture"],
  },
  {
    id: 4,
    title: "Ontology-Based Semantic Web Mining for Knowledge Extraction",
    authors: ["Z. CHBIHI", "L. BAHANI"],
    journal: "Journal of Web Semantics",
    year: 2024,
    type: "Journal",
    doi: "10.1016/j.websem.2024.XXXX",
    abstract: "We present an ontology-driven approach for semantic web mining that enables automated knowledge extraction and reasoning from heterogeneous web sources.",
    keywords: ["Ontologies", "Semantic Web", "Knowledge Extraction", "Web Mining"],
  },
  {
    id: 5,
    title: "Agentic AI Systems: A Survey of Autonomous Decision-Making Architectures",
    authors: ["M. SAOUDI", "A. MADRANE"],
    journal: "Artificial Intelligence Review",
    year: 2024,
    type: "Journal",
    doi: "10.1007/s10462-024-XXXXX",
    abstract: "This comprehensive survey examines the emerging field of agentic AI systems, covering architectures, learning paradigms, and applications in autonomous decision-making.",
    keywords: ["Agentic AI", "Autonomous Systems", "Decision Making", "AI Architecture"],
  },
  {
    id: 6,
    title: "Software-Defined Networking for Smart Campus Environments",
    authors: ["B. RAOUYANE", "M. KEBIRA"],
    journal: "IEEE International Conference on Networking (ICN 2024)",
    year: 2024,
    type: "Conference",
    doi: "10.1109/ICN.2024.XXXX",
    abstract: "We propose a software-defined networking solution tailored for smart campus environments, enabling dynamic network management and improved resource utilization.",
    keywords: ["SDN", "Smart Campus", "Network Management", "IoT"],
  },
  {
    id: 7,
    title: "Full-Stack Development Patterns for AI-Powered Web Applications",
    authors: ["A. CHANYOUR", "E. KASMI"],
    journal: "ACM Web Conference 2024",
    year: 2024,
    type: "Conference",
    doi: "10.1145/XXXXXXX",
    abstract: "This paper presents design patterns and best practices for integrating AI capabilities into modern full-stack web applications, with a focus on scalability and user experience.",
    keywords: ["Full-Stack", "Web Development", "AI Integration", "Design Patterns"],
  },
  {
    id: 8,
    title: "Big Data Analytics for Predictive Maintenance in Manufacturing",
    authors: ["A. ANDALOUSSI", "M. CHERGUI"],
    journal: "Journal of Manufacturing Systems",
    year: 2023,
    type: "Journal",
    doi: "10.1016/j.jmsy.2023.XXXX",
    abstract: "We develop a big data analytics framework for predictive maintenance in manufacturing environments, leveraging machine learning models to predict equipment failures.",
    keywords: ["Big Data", "Predictive Maintenance", "Manufacturing", "Analytics"],
  },
]

const stats = [
  { value: "50+", label: "Publications", icon: FileText },
  { value: "15+", label: "Chercheurs", icon: Users },
  { value: "8", label: "Revues indexées", icon: BookOpen },
  { value: "2025", label: "Dernière publication", icon: Calendar },
]

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Publications Scientifiques"
        subtitle="Découvrez les travaux de recherche publiés par les enseignants-chercheurs et doctorants du Master ISI."
        breadcrumb="Publications"
      />

      {/* Stats */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <s.icon className="w-6 h-6 text-primary mb-2" />
                <span className="text-2xl font-bold text-primary font-serif">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Filtrer par :</span>
            </div>
            <select className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Toutes les années</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
            <select className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Tous les types</option>
              <option>Journal</option>
              <option>Conference</option>
            </select>
            <select className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Tous les auteurs</option>
              <option>A. ANDALOUSSI</option>
              <option>R. DEHBI</option>
              <option>K. FEJTAH</option>
            </select>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    pub.type === "Journal" ? "bg-primary text-white" : "bg-accent text-white"
                  }`}>
                    {pub.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{pub.year}</span>
                  <span className="text-xs text-muted-foreground">{pub.journal}</span>
                </div>
                
                <Link href={`/publications/${pub.slug || pub.id}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                    {pub.title}
                  </h3>
                </Link>
                
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium">Auteurs :</span> {pub.authors.join(", ")}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {pub.abstract}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {pub.keywords.map((kw) => (
                    <span key={kw} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {kw}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    DOI: {pub.doi}
                  </a>
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <Download className="w-4 h-4" />
                    PDF
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Charger plus de publications
            </button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Domaines de Recherche</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Intelligence Artificielle",
              "Machine Learning",
              "Big Data & Analytics",
              "Cloud Computing",
              "Cybersécurité",
              "IoT & Systèmes Embarqués",
              "Web Sémantique",
              "Génie Logiciel",
            ].map((domain) => (
              <div key={domain} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                <span className="text-sm font-medium text-foreground">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
