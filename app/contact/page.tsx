import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

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
                    <a href="mailto:master.isi.pro@gmail.com" className="hover:text-primary transition-colors break-all">
                      master.isi.pro@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Google Maps Section */}
            <div className="bg-secondary rounded-lg p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Notre Localisation</h2>
              <p className="text-muted-foreground mb-8">
                Retrouvez-nous sur le campus de la Faculté des Sciences Aïn Chock - Km 8 Route d'El Jadida, Casablanca.
              </p>

              <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.263842144498!2d-7.658694084798226!3d33.54542745133626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29668f44d8b%3A0x7d6a4c28f11d13f!2sFacult%C3%A9%20des%20Sciences%20A%C3%AFn%20Chock!5e0!3m2!1sfr!2sma!4v1712060000000!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Localisation FSAC - Faculté des Sciences Aïn Chock"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Facult%C3%A9+des+Sciences+A%C3%AFn+Chock+Casablanca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ouvrir dans Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir//Facult%C3%A9+des+Sciences+A%C3%AFn+Chock,+Casablanca,+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Obtenir l'itinéraire
                </a>
              </div>
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
