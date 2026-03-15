"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Brain, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/cours", label: "Cours" },
  { href: "/admission", label: "Admission" },
  { href: "/recherche", label: "Recherche" },
  { href: "/enseignants", label: "Enseignants" },
  { href: "/alumni", label: "Alumni" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
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
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-card px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-primary bg-secondary font-semibold"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <Link
                href="/admission"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity"
              >
                Candidater
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
