"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Clock, Award, BookOpen, Users, GraduationCap, Globe, Cpu, Database, Brain, Network, Code, Shield, Cloud, BarChart } from "lucide-react"
import { useState } from "react"

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

const objectives = [
  "Former des ingénieurs spécialisés en Intelligence Artificielle et systèmes intelligents",
  "Développer des compétences en Machine Learning, Deep Learning et traitement de données massives",
  "Maîtriser les outils et frameworks de référence : Python, TensorFlow, PyTorch, Spark",
  "Conduire et participer à des projets de recherche appliquée",
  "Intégrer des équipes pluridisciplinaires dans les secteurs industrie, finance, santé, et e-gouvernement",
  "Concevoir, déployer et maintenir des systèmes intelligents en production",
]

const semesterModules = {
  s1: {
    name: "Semestre 1",
    description: "Fondamentaux et bases théoriques",
    modules: [
      { name: "Mathématiques pour l'analyse des données", prof: "Pr. CHERGUI", icon: BarChart },
      { name: "Structure des données avancées", prof: "Pr. RAOUAYANE", icon: Code },
      { name: "Développement web full stack", prof: "Pr. CHANYOUR", icon: Globe },
      { name: "Innovation et Intelligence Artificielle", prof: "Pr. MADRANE", icon: Brain },
      { name: "Développement avancé des bases de données", prof: "Pr. DEHBI", icon: Database },
      { name: "Programmation Python", prof: "Pr. ELKASMI", icon: Code },
      { name: "Anglais scientifique", prof: "FSAC", icon: BookOpen },
    ]
  },
  s2: {
    name: "Semestre 2",
    description: "Approfondissement et technologies avancées",
    modules: [
      { name: "Sécurité des systèmes d'information", prof: "Pr. FEJTAH", icon: Shield },
      { name: "Administration avancée des bases de données", prof: "Pr. DEHBI", icon: Database },
      { name: "Méthodologie de recherche scientifique", prof: "Pr. BENABDELLAH", icon: BookOpen },
      { name: "Traitement des données massives (Big Data)", prof: "Pr. ANDALOUSSI", icon: BarChart },
      { name: "Internet des objets (IoT)", prof: "Pr. ERRAIS", icon: Network },
      { name: "Technologie web sémantique", prof: "Pr. CHBIHI", icon: Globe },
      { name: "Culture entrepreneuriale", prof: "Intervenant externe", icon: Users },
    ]
  },
  s3: {
    name: "Semestre 3",
    description: "Spécialisation (3 parcours au choix)",
    options: [
      {
        key: "crs",
        name: "Cloud, Réseaux & Système (CRS)",
        color: "bg-blue-600",
        modules: [
          { name: "SDN & Réseaux de nouvelle génération", prof: "Pr. RAOUYANE", icon: Network },
          { name: "Systèmes répartis", prof: "Pr. KEBIRA", icon: Cloud },
          { name: "Ethical Hacking", prof: "Pr. FEJTAH", icon: Shield },
          { name: "Virtualisation des systèmes & Cloud", prof: "Pr. ERRAIS", icon: Cloud },
          { name: "Apprentissage Automatique (ML)", prof: "Pr. CHIBA", icon: Brain },
        ]
      },
      {
        key: "ds",
        name: "Science des Données (DS)",
        color: "bg-teal-600",
        modules: [
          { name: "Traitement des données multimédia", prof: "Pr. ANDALOUSSI", icon: Database },
          { name: "Systèmes répartis", prof: "Pr. KEBIRA", icon: Cloud },
          { name: "Analyse des données dans le Web", prof: "Pr. BAHANI", icon: BarChart },
          { name: "Ingénierie des ontologies", prof: "Pr. CHBIHI", icon: Brain },
          { name: "Apprentissage Automatique (ML)", prof: "Pr. CHIBA", icon: Brain },
        ]
      },
      {
        key: "gl",
        name: "Génie Logiciel (GL)",
        color: "bg-indigo-600",
        modules: [
          { name: "Développement Mobile", prof: "Pr. KASMI", icon: Cpu },
          { name: "Systèmes répartis", prof: "Pr. KEBIRA", icon: Cloud },
          { name: "Techniques et outils pour la réalisation des logiciels", prof: "Pr. MADRANE", icon: Code },
          { name: "Ingénierie dirigée par les modèles", prof: "Pr. BENABDELLAH", icon: Code },
          { name: "Développement J2EE", prof: "Pr. CHBIHI", icon: Globe },
        ]
      }
    ],
    commonModules: [
      { name: "Architecture Microservice", prof: "Pr. OUASSIT", icon: Network },
      { name: "IA Agentique", prof: "Pr. SAOUDI", icon: Brain },
      { name: "Apprentissage Automatique (ML)", prof: "Pr. CHIBA", icon: Brain },
    ]
  },
  s4: {
    name: "Semestre 4",
    description: "Stage et mémoire de fin d'études",
    modules: [
      { name: "Stage en entreprise (5-6 mois)", prof: "Encadrant académique + professionnel", icon: Users },
      { name: "Mémoire de recherche", prof: "Directeur de recherche", icon: BookOpen },
    ]
  }
}

type SemesterKey = "s1" | "s2" | "s3" | "s4"

export default function ProgrammePage() {
  const [selectedSemester, setSelectedSemester] = useState<SemesterKey>("s1")
  const [selectedOption, setSelectedOption] = useState("ds")

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
              { icon: Users, label: "Capacité", value: "60 étudiants/an" },
              { icon: Globe, label: "Langue", value: "Français / Anglais" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-serif uppercase tracking-wider font-bold">{item.label}</div>
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

      {/* Modules Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Structure du programme</span>
            <h2 className="font-serif text-3xl font-bold text-foreground mt-2">Modules par semestre</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Découvrez les modules enseignés durant les 4 semestres du Master ISI</p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(["s1", "s2", "s3", "s4"] as SemesterKey[]).map((key) => {
              const sem = key === "s3" ? semesterModules.s3 : semesterModules[key]
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSemester(key)}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${selectedSemester === key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-card border border-border text-foreground hover:bg-background"
                    }`}
                >
                  {sem.name}
                </button>
              )
            })}
          </div>

          {/* Selected Semester Content */}
          {selectedSemester !== "s3" ? (
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-xl font-bold text-white">{semesterModules[selectedSemester].name}</h3>
                <p className="text-white/70 text-sm">{semesterModules[selectedSemester].description}</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {semesterModules[selectedSemester].modules.map((mod, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <mod.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-foreground font-serif">{mod.name}</div>
                        <div className="text-sm text-muted-foreground">{mod.prof}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* S3 with Options */
            <div className="space-y-6">
              {/* Option Tabs */}
              <div className="flex flex-wrap justify-center gap-3">
                {semesterModules.s3.options.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedOption(opt.key)}
                    className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${selectedOption === opt.key
                      ? `${opt.color} text-white shadow-lg`
                      : "bg-card border border-border text-foreground hover:bg-background"
                      }`}
                  >
                    {opt.name}
                  </button>
                ))}
              </div>

              {/* Selected Option Modules */}
              {semesterModules.s3.options.filter(o => o.key === selectedOption).map((opt) => (
                <div key={opt.key} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className={`${opt.color} px-6 py-4`}>
                    <h3 className="text-xl font-bold text-white">{opt.name}</h3>
                    <p className="text-white/70 text-sm">Modules de spécialisation</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Modules spécialisés</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {opt.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary border border-border">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <mod.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-foreground font-serif">{mod.name}</div>
                            <div className="text-sm text-muted-foreground">{mod.prof}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Modules communs (toutes options)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {semesterModules.s3.commonModules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                            <mod.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-foreground font-serif">{mod.name}</div>
                            <div className="text-sm text-muted-foreground">{mod.prof}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* All Options Overview */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {semesterModules.s3.options.map((opt) => (
                  <div
                    key={opt.key}
                    className={`rounded-xl border-2 p-6 transition-all cursor-pointer ${selectedOption === opt.key ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
                      }`}
                    onClick={() => setSelectedOption(opt.key)}
                  >
                    <div className={`w-3 h-3 rounded-full ${opt.color} mb-3`} />
                    <h4 className="font-serif font-bold text-foreground mb-2">{opt.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {opt.modules.length} cours spécialisés + modules communs
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
                    "Rédaction du mémoire de fin d'études",
                    "Soutenance devant un jury mixte",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center w-full md:w-48 h-48 bg-primary/10 rounded-xl">
                <GraduationCap className="w-20 h-20 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4 text-balance">
            Prêt à rejoindre le Master ISI ?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Consultez les conditions d'admission et déposez votre candidature pour la prochaine rentrée universitaire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admission"
              className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2 font-serif uppercase tracking-wider text-sm"
            >
              Voir les conditions d'admission
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-serif uppercase tracking-wider text-sm"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
