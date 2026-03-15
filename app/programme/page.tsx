"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Clock, Award, BookOpen, Users, GraduationCap, Globe } from "lucide-react"
import { useState } from "react"

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

const objectives = [
  "Former des ingénieurs spécialisés en Intelligence Artificielle et systèmes intelligents",
  "Développer des compétences en Machine Learning, Deep Learning et traitement de données massives",
  "Maîtriser les outils et frameworks de référence : Python, TensorFlow, PyTorch, Spark",
  "Conduire et participer à des projets de recherche appliquée",
  "Intégrer des équipes pluridisciplinaires dans les secteurs industrie, finance, santé, et e-gouvernement",
  "Concevoir, déployer et maintenir des systèmes intelligents en production",
]

// S1 Schedule
const s1Schedule = [
  { day: "Lundi", morning: { course: "Mathématiques pour l'analyse des données", prof: "Pr. CHERGUI", room: "Salle G7" }, afternoon: { course: "Structure des données avancées", prof: "Pr. RAOUAYANE", room: "Salle G7" } },
  { day: "Mardi", morning: { course: "Développement web full stack", prof: "Pr. CHANYOUR", room: "Salle G7" }, afternoon: null },
  { day: "Mercredi", morning: { course: "Innovation et Intelligence Artificielle", prof: "Pr. MADRANE", room: "Salle G7" }, afternoon: null },
  { day: "Jeudi", morning: { course: "Développement avancé des bases de données", prof: "Pr. DEHBI", room: "Salle G7" }, afternoon: null },
  { day: "Vendredi", morning: { course: "Anglais (08h30)", prof: "Salle M9", room: "" }, afternoon: { course: "Programmation Python (jusqu'à 13h)", prof: "Pr. ELKASMI", room: "Salle G7" } },
]

// S2 Schedule
const s2Schedule = [
  { day: "Lundi", morning: { course: "Sécurité des systèmes d'information", prof: "Pr. FEJTAH", room: "Salle 10 – Bâtiment master" }, afternoon: null },
  { day: "Mardi", morning: { course: "Administration Avancée des bases de données", prof: "Pr. DEHBI", room: "Salle 10 – Bâtiment master" }, afternoon: null },
  { day: "Mercredi", morning: { course: "Méthodologie de recherche scientifique", prof: "Pr. BENABDELLAH", room: "Salle 10 – Bâtiment master" }, afternoon: null },
  { day: "Jeudi", morning: { course: "Traitement des données massives", prof: "Pr. ANDALOUSSI", room: "Salle 10 – Bâtiment master" }, afternoon: { course: "Internet des objets", prof: "Pr. ERRAIS", room: "Salle 10 – Bâtiment master" } },
  { day: "Vendredi", morning: { course: "Technologie web sémantique", prof: "Pr. CHBIHI", room: "Salle 10 – Bâtiment master" }, afternoon: null },
  { day: "Samedi", morning: { course: "Culture entrepreneuriale et techniques de communication", prof: "Intervenant externe", room: "" }, afternoon: null },
]

// S3 Options
const s3Options = {
  crs: {
    name: "Cloud, Réseaux & Système (CRS)",
    color: "bg-blue-600",
    schedule: [
      { day: "Lundi", course: "SDN & Réseaux de nouvelle génération", prof: "Pr. RAOUYANE" },
      { day: "Mercredi", course: "Systèmes répartis", prof: "Pr. KEBIRA" },
      { day: "Jeudi", course: "Ethical Hacking", prof: "Pr. FEJTAH" },
      { day: "Jeudi", course: "Apprentissage Automatique (Machine Learning)", prof: "Pr. CHIBA" },
      { day: "Vendredi", course: "Virtualisation des systèmes & Cloud", prof: "Pr. ERRAIS" },
      { day: "Commun", course: "Architecture Microservice", prof: "Pr. OUASSIT" },
      { day: "Commun", course: "IA Agentique", prof: "Pr. SAOUDI" },
    ]
  },
  ds: {
    name: "Science des Données (DS)",
    color: "bg-teal-600",
    schedule: [
      { day: "Lundi", course: "Traitement des données multimédia", prof: "Pr. ANDALOUSSI" },
      { day: "Mercredi", course: "Systèmes répartis", prof: "Pr. KEBIRA" },
      { day: "Mercredi", course: "Analyse des données dans le Web", prof: "Pr. BAHANI" },
      { day: "Jeudi", course: "Apprentissage Automatique (Machine Learning)", prof: "Pr. CHIBA" },
      { day: "Vendredi", course: "Ingénierie des ontologies", prof: "Pr. CHBIHI" },
      { day: "Commun", course: "Architecture Microservice", prof: "Pr. OUASSIT" },
      { day: "Commun", course: "IA Agentique", prof: "Pr. SAOUDI" },
    ]
  },
  gl: {
    name: "Génie Logiciel (GL)",
    color: "bg-indigo-600",
    schedule: [
      { day: "Mercredi", course: "Systèmes répartis", prof: "Pr. KEBIRA" },
      { day: "Mercredi", course: "Développement Mobile (13h-14h30)", prof: "Pr. KASMI" },
      { day: "Jeudi", course: "Technique et outil pour la réalisation des logiciels", prof: "Pr. MADRANE" },
      { day: "Jeudi", course: "Apprentissage Automatique (Machine Learning)", prof: "Pr. CHIBA" },
      { day: "Vendredi", course: "Ingénierie dirigée par les modèles", prof: "Pr. BENABDELLAH" },
      { day: "Vendredi", course: "Développement J2EE (13h-14h30)", prof: "Pr. CHBIHI" },
      { day: "Commun", course: "Architecture Microservice", prof: "Pr. OUASSIT" },
      { day: "Commun", course: "IA Agentique", prof: "Pr. SAOUDI" },
    ]
  }
}

type OptionKey = keyof typeof s3Options

export default function ProgrammePage() {
  const [selectedOption, setSelectedOption] = useState<OptionKey>("ds")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHero
        title="Présentation du Master ISI"
        subtitle="Master en Ingénierie des Systèmes Intelligents – Diplôme national de Master accrédité par le Ministère de l'Enseignement Supérieur."
        breadcrumb="Programme"
      />

      {/* Quick info */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {[
              { icon: Clock, label: "Durée", value: "2 ans (4 semestres)" },
              { icon: Award, label: "Diplôme", value: "Master national accrédité" },
              { icon: BookOpen, label: "Crédits", value: "120 crédits ECTS" },
              { icon: Users, label: "Capacité", value: "25–30 étudiants/an" },
              { icon: Globe, label: "Langue", value: "Français / Anglais" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Objectifs</span>
              <h2 className="font-serif text-3xl font-bold text-foreground mt-2 mb-6">Compétences visées</h2>
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Débouchés</span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Perspectives professionnelles</h2>
              {[
                { role: "Ingénieur IA / Data Scientist", sectors: "Technologie, Finance, Santé" },
                { role: "Machine Learning Engineer", sectors: "Startups, Grands groupes" },
                { role: "Chercheur en Systèmes Intelligents", sectors: "Universités, Centres R&D" },
                { role: "Architecte Systèmes IA", sectors: "Télécoms, Industrie, Gouvernement" },
                { role: "Consultant en Transformation Numérique", sectors: "Conseil, ESN" },
              ].map((d) => (
                <div key={d.role} className="flex items-center justify-between p-4 rounded-lg bg-secondary border border-border">
                  <div>
                    <div className="font-semibold text-sm text-foreground">{d.role}</div>
                    <div className="text-xs text-muted-foreground">{d.sectors}</div>
                  </div>
                  <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S1 Schedule */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Semestre 1</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Emploi du Temps S1 – 2025/2026</h2>
            <p className="text-muted-foreground mt-2">Coordinateur : Pr. ERRAIS | Début : 05/11/2025</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg border border-border overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Jour</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Matin (09h00 - 11h45)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Après-midi (12h45 - 16h00)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {s1Schedule.map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{row.day}</td>
                    <td className="px-4 py-3">
                      {row.morning ? (
                        <div>
                          <div className="font-medium text-foreground text-sm">{row.morning.course}</div>
                          <div className="text-xs text-muted-foreground">{row.morning.prof} {row.morning.room && `• ${row.morning.room}`}</div>
                        </div>
                      ) : <span className="text-muted-foreground text-sm">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      {row.afternoon ? (
                        <div>
                          <div className="font-medium text-foreground text-sm">{row.afternoon.course}</div>
                          <div className="text-xs text-muted-foreground">{row.afternoon.prof} {row.afternoon.room && `• ${row.afternoon.room}`}</div>
                        </div>
                      ) : <span className="text-muted-foreground text-sm">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S2 Schedule */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Semestre 2</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Emploi du Temps S2 – 2025/2026</h2>
            <p className="text-muted-foreground mt-2">Salle 10 – Bâtiment Master</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg border border-border overflow-hidden">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Jour</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Matin</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Après-midi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {s2Schedule.map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{row.day}</td>
                    <td className="px-4 py-3">
                      {row.morning ? (
                        <div>
                          <div className="font-medium text-foreground text-sm">{row.morning.course}</div>
                          <div className="text-xs text-muted-foreground">{row.morning.prof} {row.morning.room && `• ${row.morning.room}`}</div>
                        </div>
                      ) : <span className="text-muted-foreground text-sm">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      {row.afternoon ? (
                        <div>
                          <div className="font-medium text-foreground text-sm">{row.afternoon.course}</div>
                          <div className="text-xs text-muted-foreground">{row.afternoon.prof} {row.afternoon.room && `• ${row.afternoon.room}`}</div>
                        </div>
                      ) : <span className="text-muted-foreground text-sm">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S3 Options */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Semestre 3</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Spécialisations S3 – 2025/2026</h2>
            <p className="text-muted-foreground mt-2">Choisissez votre parcours de spécialisation</p>
          </div>

          {/* Option Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(Object.keys(s3Options) as OptionKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedOption(key)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  selectedOption === key
                    ? `${s3Options[key].color} text-white shadow-lg`
                    : "bg-card border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {s3Options[key].name}
              </button>
            ))}
          </div>

          {/* Selected Option Schedule */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className={`${s3Options[selectedOption].color} px-6 py-4`}>
              <h3 className="text-xl font-bold text-white">{s3Options[selectedOption].name}</h3>
            </div>
            <div className="p-6">
              <div className="grid gap-3">
                {s3Options[selectedOption].schedule.map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      item.day === "Commun" ? "bg-primary/10 border border-primary/20" : "bg-secondary"
                    }`}
                  >
                    <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${
                      item.day === "Commun" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}>
                      {item.day}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{item.course}</div>
                      <div className="text-sm text-muted-foreground">{item.prof}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Options Overview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {(Object.entries(s3Options) as [OptionKey, typeof s3Options[OptionKey]][]).map(([key, option]) => (
              <div 
                key={key} 
                className={`rounded-xl border-2 p-6 transition-all cursor-pointer ${
                  selectedOption === key ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
                }`}
                onClick={() => setSelectedOption(key)}
              >
                <div className={`w-3 h-3 rounded-full ${option.color} mb-3`} />
                <h4 className="font-serif font-bold text-foreground mb-2">{option.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {option.schedule.length - 2} cours spécialisés + 2 modules communs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4 Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <span className="inline-block bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Semestre 4</span>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Stage & Mémoire de Fin d'Études</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Le quatrième semestre est entièrement consacré à un stage en entreprise ou à un mémoire de recherche d'une durée de 5 à 6 mois, suivi d'une soutenance devant un jury académique et professionnel.
                </p>
                <ul className="space-y-2">
                  {[
                    "Stage en entreprise (5-6 mois)",
                    "Projet de recherche encadré",
                    "Rédaction du mémoire",
                    "Soutenance devant jury"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-64 bg-secondary rounded-lg p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-foreground mb-1">120</div>
                <div className="text-sm text-muted-foreground">Crédits ECTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-10 bg-secondary">
        <Link
          href="/cours"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          Voir le détail des cours <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <Footer />
    </div>
  )
}
