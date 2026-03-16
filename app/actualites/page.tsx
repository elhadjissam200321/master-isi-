import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Calendar, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import { getViews } from "@/lib/views"
import { articles } from "@/data/articles"

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

// Data is now imported from @/data/articles

export default async function ActualitesPage() {
  const views = await getViews()

  const actualitesWithViews = Object.values(articles).map(item => ({
    ...item,
    views: views[item.slug] || item.views
  }))

  const featuredNews = actualitesWithViews.filter(a => a.featured)
  const otherNews = actualitesWithViews.filter(a => !a.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Actualités"
        subtitle="Restez informé des dernières nouvelles du Master ISI : événements, publications, partenariats et opportunités."
        breadcrumb="Actualités"
      />

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">À la Une</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredNews.map((news) => (
              <Link
                key={news.id}
                href={`/actualites/${news.slug}`}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group block"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image || "/images/hero-neural.jpg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                      {news.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 border-l border-border pl-3">
                      <Eye className="w-3 h-3" />
                      {news.views} vues
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Lire la suite <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Toutes les actualités</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((news) => (
              <Link
                key={news.id}
                href={`/actualites/${news.slug}`}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group block"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={news.image || "/images/hero-neural.jpg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-primary border border-border">
                      {news.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 border-l border-border pl-3">
                      <Eye className="w-3 h-3" />
                      {news.views} vues
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-serif text-base">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Lire la suite <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Restez informé</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités du Master ISI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
