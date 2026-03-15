"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Brain, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/actualites", label: "Actualités" },
  { href: "/evenements", label: "Événements" },
  { href: "/recherche", label: "Recherche" },
  { href: "/publications", label: "Publications" },
  { href: "/enseignants", label: "Enseignants" },
  { href: "/alumni", label: "Alumni" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="w-full">
        {/* Top bar */}
        <div className="bg-primary text-primary-foreground text-xs py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span>Faculté des Sciences Aïn Chock – Université Hassan II de Casablanca</span>
            <div className="flex items-center gap-4">
              <a href="https://www.fsac.ac.ma" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80">
                fsac.ac.ma
              </a>
              <span className="opacity-40">|</span>
              <a href="https://www.uh2c.ac.ma" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80">
                uh2c.ac.ma
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-primary tracking-wide">Master ISI</span>
                  <span className="text-[10px] text-muted-foreground tracking-widest uppercase">FSAC · Hassan II</span>
                </div>
              </Link>

              {/* Desktop links */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === link.href
                        ? "text-primary bg-secondary font-semibold"
                        : "text-foreground hover:text-primary hover:bg-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/admission"
                  className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Candidater
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors z-50"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile slide-right menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile slide-right menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-sm bg-card z-50 lg:hidden shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-primary">Master ISI</span>
              <span className="text-[9px] text-muted-foreground tracking-widest uppercase">Navigation</span>
            </div>
          </div>
          <button
            className="p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu links */}
        <div className="flex flex-col p-4 overflow-y-auto h-[calc(100%-180px)]">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-200 group",
                pathname === link.href
                  ? "text-primary bg-secondary font-semibold"
                  : "text-foreground hover:text-primary hover:bg-secondary/50"
              )}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <span>{link.label}</span>
              <ChevronRight className={cn(
                "w-4 h-4 transition-transform duration-200",
                pathname === link.href ? "text-primary" : "text-muted-foreground group-hover:translate-x-1"
              )} />
            </Link>
          ))}
        </div>

        {/* Menu footer with CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border bg-secondary/30">
          <Link
            href="/admission"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-base font-semibold px-4 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>Candidater maintenant</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-xs text-muted-foreground mt-3">
            FSAC · Université Hassan II
          </p>
        </div>
      </div>
    </>
  )
}
