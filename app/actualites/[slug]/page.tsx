import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Clock } from "lucide-react"

// Sample article data - in production, this would come from a CMS or database
const articles = {
  "conference-ia-2025": {
    title: "Conférence Internationale sur l'IA à la FSAC",
    excerpt: "La FSAC accueille des experts mondiaux de l'Intelligence Artificielle pour une conférence exceptionnelle.",
    content: `
      <p>La Faculté des Sciences Aïn Chock a eu l'honneur d'accueillir la première édition de la Conférence Internationale sur l'Intelligence Artificielle, réunissant plus de 200 participants venus du monde entier.</p>
      
      <h2>Un événement d'envergure internationale</h2>
      <p>Cette conférence a permis de rassembler des chercheurs, industriels et étudiants autour des dernières avancées en matière d'IA. Les thématiques abordées incluaient le Machine Learning, le Deep Learning, le traitement du langage naturel et la vision par ordinateur.</p>
      
      <h2>Des intervenants de renommée mondiale</h2>
      <p>Parmi les intervenants, nous avons eu le privilège d'accueillir des professeurs des plus grandes universités mondiales ainsi que des représentants d'entreprises leaders dans le domaine de l'IA.</p>
      
      <blockquote>"Cette conférence marque une étape importante dans le positionnement de la FSAC comme acteur majeur de la recherche en IA au niveau international." - Pr. CHIBA</blockquote>
      
      <h2>Retombées pour le Master ISI</h2>
      <p>Les étudiants du Master ISI ont eu l'opportunité de présenter leurs travaux de recherche et d'échanger avec des experts du domaine, ouvrant ainsi des perspectives de collaboration et de stages.</p>
    `,
    category: "Recherche",
    date: "15 Mars 2025",
    readTime: "5 min",
    author: "Pr. CHIBA",
    image: "/images/hero-neural.jpg",
  },
  "partenariat-entreprise": {
    title: "Nouveau Partenariat avec les Entreprises Tech",
    excerpt: "Le Master ISI renforce ses liens avec le monde professionnel à travers de nouveaux partenariats stratégiques.",
    content: `
      <p>Dans le cadre de sa politique d'ouverture sur le monde professionnel, le Master ISI vient de signer plusieurs conventions de partenariat avec des entreprises leaders dans le domaine du numérique.</p>
      
      <h2>Des partenaires de premier plan</h2>
      <p>Ces accords concernent notamment des entreprises spécialisées en développement logiciel, en data science et en intelligence artificielle, offrant ainsi de nouvelles opportunités pour nos étudiants.</p>
      
      <h2>Avantages pour les étudiants</h2>
      <p>Ces partenariats permettront aux étudiants de bénéficier de stages en entreprise, d'interventions de professionnels et de projets tutorés en lien direct avec les besoins du marché.</p>
    `,
    category: "Partenariat",
    date: "10 Mars 2025",
    readTime: "3 min",
    author: "Administration ISI",
    image: "/images/hero-neural.jpg",
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article non trouvé</h1>
            <Link href="/actualites" className="text-primary hover:underline">
              Retour aux actualités
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
        {/* Hero */}
        <div className="relative h-[40vh] min-h-[300px] bg-primary">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux actualités
              </Link>
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4 text-balance">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_250px] gap-10">
            {/* Article body */}
            <article
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Share */}
              <div className="bg-secondary rounded-lg p-5 border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager
                </h3>
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

              {/* Related */}
              <div className="bg-secondary rounded-lg p-5 border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3">Articles similaires</h3>
                <div className="space-y-3">
                  {Object.entries(articles)
                    .filter(([key]) => key !== slug)
                    .slice(0, 2)
                    .map(([key, art]) => (
                      <Link
                        key={key}
                        href={`/actualites/${key}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {art.title}
                      </Link>
                    ))}
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
