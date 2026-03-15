import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Users, BookOpen, ExternalLink, Download, Quote, Tag } from "lucide-react"

const publications = {
  "deep-learning-nlp-2024": {
    title: "Deep Learning Approaches for Arabic Natural Language Processing: A Comprehensive Survey",
    authors: ["Pr. CHIBA Z.", "Pr. ANDALOUSSI S.", "Dr. BENALI A."],
    journal: "Journal of Artificial Intelligence Research",
    year: 2024,
    volume: "Vol. 78",
    pages: "pp. 245-298",
    doi: "10.1613/jair.1.14523",
    type: "Article",
    abstract: `
      This comprehensive survey presents an in-depth analysis of deep learning techniques applied to Arabic Natural Language Processing (NLP). 
      We examine the unique challenges posed by the Arabic language, including its morphological complexity, dialectal variations, and the scarcity of annotated datasets. 
      The paper reviews state-of-the-art models for various NLP tasks including sentiment analysis, named entity recognition, machine translation, and question answering systems specifically designed for Arabic text.
    `,
    content: `
      <h2>Introduction</h2>
      <p>Arabic Natural Language Processing has gained significant attention in recent years due to the growing digital presence of Arabic content and the need for automated text processing systems. This survey provides a comprehensive overview of deep learning methods that have been successfully applied to various Arabic NLP tasks.</p>
      
      <h2>Methodology</h2>
      <p>We conducted a systematic review of over 200 papers published between 2018 and 2024, focusing on deep learning approaches for Arabic NLP. Our analysis covers transformer-based models, recurrent neural networks, and hybrid architectures.</p>
      
      <h2>Key Findings</h2>
      <ul>
        <li>Pre-trained models like AraBERT and CAMeLBERT have significantly improved performance across multiple tasks</li>
        <li>Dialectal Arabic remains a major challenge requiring specialized models</li>
        <li>Data augmentation techniques show promising results for low-resource scenarios</li>
        <li>Cross-lingual transfer learning offers opportunities for leveraging multilingual models</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Deep learning has revolutionized Arabic NLP, but significant challenges remain. Future research should focus on dialectal Arabic processing, multimodal approaches, and the development of larger annotated datasets.</p>
    `,
    keywords: ["Deep Learning", "Arabic NLP", "Transformer", "BERT", "Sentiment Analysis"],
    citations: 45,
    pdfUrl: "#",
  },
  "smart-grid-iot-2024": {
    title: "Intelligent IoT-based Smart Grid Management System using Reinforcement Learning",
    authors: ["Pr. ERRAIS K.", "Pr. RAOUYANE B.", "Dr. KEBIRA H."],
    journal: "IEEE Transactions on Smart Grid",
    year: 2024,
    volume: "Vol. 15, No. 3",
    pages: "pp. 1892-1905",
    doi: "10.1109/TSG.2024.3142567",
    type: "Article",
    abstract: `
      This paper presents a novel approach to smart grid management using Internet of Things (IoT) sensors and reinforcement learning algorithms. 
      We propose an intelligent system capable of optimizing energy distribution, predicting demand fluctuations, and managing renewable energy integration in real-time.
      Experimental results on a pilot deployment in Casablanca demonstrate significant improvements in energy efficiency and grid stability.
    `,
    content: `
      <h2>Introduction</h2>
      <p>The modernization of electrical grids requires intelligent management systems capable of handling the complexity of distributed energy resources, renewable integration, and dynamic demand patterns. This research addresses these challenges through an innovative IoT-based approach combined with reinforcement learning.</p>
      
      <h2>System Architecture</h2>
      <p>Our proposed system consists of three main components: a distributed sensor network for real-time monitoring, an edge computing layer for local processing, and a cloud-based reinforcement learning engine for global optimization.</p>
      
      <h2>Results</h2>
      <ul>
        <li>15% reduction in energy losses compared to traditional management</li>
        <li>23% improvement in renewable energy utilization</li>
        <li>Real-time response to demand fluctuations within 100ms</li>
        <li>Successful pilot deployment covering 5000 households</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Our intelligent grid management system demonstrates the potential of combining IoT and reinforcement learning for sustainable energy management. Future work will focus on scaling the system and incorporating additional renewable sources.</p>
    `,
    keywords: ["Smart Grid", "IoT", "Reinforcement Learning", "Energy Management", "Sustainability"],
    citations: 28,
    pdfUrl: "#",
  },
  "microservices-cloud-2023": {
    title: "Scalable Microservices Architecture for Cloud-Native Applications: Design Patterns and Best Practices",
    authors: ["Pr. OUASSIT M.", "Pr. DEHBI R.", "Pr. MADRANE N."],
    journal: "Journal of Cloud Computing",
    year: 2023,
    volume: "Vol. 12",
    pages: "Article 87",
    doi: "10.1186/s13677-023-00456-8",
    type: "Article",
    abstract: `
      This paper presents a comprehensive framework for designing and implementing scalable microservices architectures for cloud-native applications. 
      We identify common design patterns, propose best practices for service decomposition, and provide guidelines for handling distributed system challenges such as data consistency, service discovery, and fault tolerance.
    `,
    content: `
      <h2>Introduction</h2>
      <p>Cloud-native applications require architectures that can scale dynamically, recover from failures automatically, and evolve continuously. Microservices architecture has emerged as the dominant paradigm for building such applications, but its implementation presents significant challenges.</p>
      
      <h2>Design Patterns</h2>
      <p>We present a catalog of 15 design patterns organized into four categories: communication patterns, data management patterns, reliability patterns, and observability patterns.</p>
      
      <h2>Case Study</h2>
      <p>We validate our framework through a case study of migrating a monolithic e-commerce platform to a microservices architecture, demonstrating a 40% improvement in deployment frequency and 60% reduction in mean time to recovery.</p>
      
      <h2>Conclusion</h2>
      <p>Our framework provides practical guidance for organizations adopting microservices architecture. The patterns and practices presented have been validated in real-world production environments.</p>
    `,
    keywords: ["Microservices", "Cloud Computing", "Software Architecture", "Design Patterns", "DevOps"],
    citations: 67,
    pdfUrl: "#",
  },
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return Object.keys(publications).map((id) => ({ id }))
}

export default async function PublicationDetailPage({ params }: Props) {
  const { id } = await params
  const pub = publications[id as keyof typeof publications]

  if (!pub) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Publication non trouvée</h1>
            <Link href="/publications" className="text-primary hover:underline">
              Retour aux publications
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
              href="/publications"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux publications
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                {pub.type}
              </span>
              <span className="text-primary-foreground/70 text-sm">{pub.year}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4 text-balance leading-tight">
              {pub.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-primary-foreground/80">
              <Users className="w-4 h-4" />
              {pub.authors.join(", ")}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Main content */}
            <div>
              {/* Abstract */}
              <div className="mb-8 p-6 bg-secondary rounded-xl border border-border">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                  <Quote className="w-5 h-5 text-primary" />
                  Résumé
                </h2>
                <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
              </div>

              {/* Keywords */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Tag className="w-4 h-4 text-primary" />
                  Mots-clés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full content */}
              <article
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: pub.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Publication info card */}
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Informations</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Journal</p>
                    <p className="font-medium text-foreground">{pub.journal}</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-muted-foreground mb-1">Volume</p>
                      <p className="font-medium text-foreground">{pub.volume}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Pages</p>
                      <p className="font-medium text-foreground">{pub.pages}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">DOI</p>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      {pub.doi}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Citations</p>
                    <p className="font-medium text-foreground">{pub.citations} citations</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <a
                    href={pub.pdfUrl}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger le PDF
                  </a>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir sur le journal
                  </a>
                </div>

                {/* Citation */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Citer cette publication</p>
                  <div className="p-3 bg-secondary rounded-lg text-xs text-muted-foreground font-mono leading-relaxed">
                    {pub.authors.join(", ")} ({pub.year}). {pub.title}. <em>{pub.journal}</em>, {pub.volume}, {pub.pages}. DOI: {pub.doi}
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
