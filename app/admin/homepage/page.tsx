"use client"

import { useState, useEffect } from "react"
import { LayoutDashboard, Save, TrendingUp, Cpu, Award } from "lucide-react"

interface HomepageData {
    hero: {
        title: string;
        description: string;
    };
    stats: {
        label: string;
        value: string;
    }[];
    pillars: {
        title: string;
        desc: string;
    }[];
}

export default function HomepageManager() {
    const [data, setData] = useState<HomepageData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/admin/homepage").then(res => res.json()).then(d => {
            setData(d)
            setLoading(false)
        })
    }, [])

    const handleSave = async () => {
        if (!data) return
        await fetch("/api/admin/homepage", {
            method: "POST",
            body: JSON.stringify(data)
        })
        alert("Modifications enregistrées !")
    }

    if (loading || !data) return <div className="p-8 text-slate-400">Chargement...</div>

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <LayoutDashboard className="w-6 h-6 text-indigo-400" />
                        Contenu de l'Accueil
                    </h1>
                    <p className="text-slate-400 text-sm">Gérez les statistiques, les piliers et le texte principal.</p>
                </div>
                <button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition font-semibold">
                    <Save className="w-4 h-4" /> Enregistrer tout
                </button>
            </div>

            <div className="space-y-10">
                {/* Hero Section */}
                <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-lg font-bold text-white mb-4">Section Hero (Entête)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="text-xs text-slate-400 block mb-1">Titre Principal</label>
                            <input
                                value={data.hero.title}
                                onChange={e => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-indigo-500 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="text-xs text-slate-400 block mb-1">Description Hero</label>
                            <textarea
                                value={data.hero.description}
                                onChange={e => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-indigo-500 outline-none h-24"
                            />
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-lg font-bold text-white mb-4">Statistiques Clés</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data.stats.map((s, i) => (
                            <div key={i} className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                                <label className="text-xs text-slate-500 block mb-1">{s.label}</label>
                                <input
                                    value={s.value}
                                    onChange={e => {
                                        const newStats = [...data.stats]
                                        newStats[i].value = e.target.value
                                        setData({ ...data, stats: newStats })
                                    }}
                                    className="bg-transparent border-b border-slate-700 w-full text-white font-bold mb-2 focus:border-indigo-500 outline-none pb-1"
                                />
                                <input
                                    value={s.label}
                                    onChange={e => {
                                        const newStats = [...data.stats]
                                        newStats[i].label = e.target.value
                                        setData({ ...data, stats: newStats })
                                    }}
                                    className="bg-transparent text-slate-400 text-sm w-full outline-none"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pillars Section */}
                <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-lg font-bold text-white mb-4">Les 4 Piliers (Axes de formation)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.pillars.map((p, i) => (
                            <div key={i} className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                                <input
                                    value={p.title}
                                    onChange={e => {
                                        const newPillars = [...data.pillars]
                                        newPillars[i].title = e.target.value
                                        setData({ ...data, pillars: newPillars })
                                    }}
                                    className="bg-transparent text-white font-bold w-full mb-2 focus:border-indigo-500 outline-none"
                                />
                                <textarea
                                    value={p.desc}
                                    onChange={e => {
                                        const newPillars = [...data.pillars]
                                        newPillars[i].desc = e.target.value
                                        setData({ ...data, pillars: newPillars })
                                    }}
                                    className="bg-transparent text-slate-400 text-sm w-full outline-none h-20"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
