import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Contact – Master ISI',
  description:
    'Contactez la direction du Master Ingénierie des Systèmes Intelligents à la FSAC pour vos questions sur le programme, les admissions et les bourses.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
              Nous Contacter
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Des questions sur le Master ISI ? Contactez-nous directement pour obtenir des informations complètes sur le programme et les admissions.
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Address */}
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Adresse</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Faculté des Sciences Aïn Chock<br />
                  Université Hassan II de Casablanca<br />
                  Casablanca, Maroc
                </p>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.487a1 1 0 00.502.756l2.048 1.029a5.004 5.004 0 006.856.855m-5.505-2.498l2.048-1.029a1 1 0 00.502-.756l1.498-7.487a1 1 0 00-.948-.684H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3.28a1 1 0 00-.948.684l-1.498 7.487" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Téléphone</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <a href="tel:+212522248670" className="hover:text-primary transition-colors">
                      +212 (5) 22 24 86 70
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+212522248671" className="hover:text-primary transition-colors">
                      +212 (5) 22 24 86 71
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">E-mail</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <a href="mailto:master.isi@fsac.ac.ma" className="hover:text-primary transition-colors break-all">
                      master.isi@fsac.ac.ma
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@fsac.ac.ma" className="hover:text-primary transition-colors">
                      info@fsac.ac.ma
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-secondary rounded-lg p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Envoyez-nous un Message</h2>
              <p className="text-muted-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nom Complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                    <input
                      type="email"
                      placeholder="votre.email@example.com"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sujet</label>
                  <input
                    type="text"
                    placeholder="Sujet de votre message"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Votre message..."
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-mid transition-colors"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Hours Section */}
            <div className="mt-12 bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Horaires d'Ouverture</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Semaine (Lundi - Jeudi)</span><br />
                    08h00 - 17h00
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Vendredi</span><br />
                    08h00 - 12h30 et 14h30 - 17h00
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Samedi - Dimanche</span><br />
                    Fermé
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Jours Fériés</span><br />
                    Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
