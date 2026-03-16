import Link from "next/link"
import { MapPin, Phone, Mail, Printer, ExternalLink } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  programme: [
    { href: "/programme", label: "Présentation" },
    { href: "/actualites", label: "Actualités" },
    { href: "/admission", label: "Admission" },
  ],
  universite: [
    { href: "https://www.fsac.ac.ma", label: "FSAC", external: true },
    { href: "https://www.uh2c.ac.ma", label: "Université Hassan II", external: true },
  ],
  communaute: [
    { href: "/enseignants", label: "Équipe pédagogique" },
    { href: "/alumni", label: "Réseau alumni" },
    { href: "/contact", label: "Nous contacter" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Neural network SVG background pattern */}
      <div className="relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
          viewBox="0 0 800 300"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Nodes */}
          {[
            [80, 60], [200, 40], [340, 80], [480, 50], [620, 70], [740, 45],
            [120, 150], [280, 130], [420, 160], [560, 140], [700, 155],
            [60, 250], [180, 230], [320, 260], [460, 240], [600, 255], [760, 235],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill="white" />
          ))}
          {/* Connections */}
          {[
            [80, 60, 200, 40], [200, 40, 340, 80], [340, 80, 480, 50],
            [480, 50, 620, 70], [620, 70, 740, 45],
            [120, 150, 280, 130], [280, 130, 420, 160], [420, 160, 560, 140],
            [560, 140, 700, 155],
            [60, 250, 180, 230], [180, 230, 320, 260], [320, 260, 460, 240],
            [460, 240, 600, 255], [600, 255, 760, 235],
            [80, 60, 120, 150], [200, 40, 280, 130], [340, 80, 420, 160],
            [480, 50, 560, 140], [620, 70, 700, 155],
            [120, 150, 60, 250], [280, 130, 180, 230], [420, 160, 320, 260],
            [560, 140, 460, 240], [700, 155, 600, 255],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" />
          ))}
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo-white.png"
                  alt="Master ISI Logo"
                  width={200}
                  height={100}
                  className="w-[200px] h-auto grayscale brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Formation d&apos;excellence en Intelligence Artificielle et Systèmes Intelligents.
                Diplôme national accrédité.
              </p>
              <div className="mt-5 space-y-2 text-sm text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/50" />
                  <span>Km 8, Route El Jadida, Casablanca</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-white/50" />
                  <span>+212 5 22 23 06 80 / 84</span>
                </div>
                <div className="flex items-center gap-2">
                  <Printer className="w-4 h-4 shrink-0 text-white/50" />
                  <span>Fax: +212 5 22 23 06 74</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-white/50" />
                  <span>master.isi.pro@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Programme */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 font-serif">Programme</h3>
              <ul className="space-y-2">
                {footerLinks.programme.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Université */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 font-serif">Université</h3>
              <ul className="space-y-2">
                {footerLinks.universite.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communauté */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 font-serif">Communauté</h3>
              <ul className="space-y-2">
                {footerLinks.communaute.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/50">
          <span>© {new Date().getFullYear()} Master ISI – FSAC, Université Hassan II de Casablanca. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  )
}
