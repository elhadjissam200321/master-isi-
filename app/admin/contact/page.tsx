"use client"

import { useState, useEffect } from "react"
import { Settings, Save, Mail, Phone, MapPin, Globe, Share2 } from "lucide-react"

interface ContactData {
    email: string;
    phone: string;
    address: string;
    locationName: string;
    googleMapsEmbed: string;
    googleMapsLink: string;
    itineraryLink: string;
    openingHours: {
        week: string;
        friday: string;
        weekend: string;
    };
}

interface ConfigData {
    siteName: string;
    universityName: string;
    facultyName: string;
    socials: Record<string, string>;
    navigation: { label: string; href: string }[];
    footer: {
        usefulLinks: { label: string; href: string }[];
        masterLinks: { label: string; href: string }[];
    };
}

export default function SettingsManager() {
    const [contact, setContact] = useState<ContactData | null>(null)
    const [config, setConfig] = useState<ConfigData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([
            fetch("/api/admin/contact").then(res => res.json()),
            fetch("/api/admin/config").then(res => res.json())
        ]).then(([contactData, configData]) => {
            setContact(contactData)
            setConfig(configData)
            setLoading(false)
        })
    }, [])

    const handleSave = async () => {
        if (!contact || !config) return
        await Promise.all([
            fetch("/api/admin/contact", { method: "POST", body: JSON.stringify(contact) }),
            fetch("/api/admin/config", { method: "POST", body: JSON.stringify(config) })
        ])
        alert("Paramètres enregistrés !")
    }

    if (loading || !contact || !config) return <div className="p-8 text-slate-400">Chargement...</div>

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Settings className="w-6 h-6 text-indigo-400" />
                        Paramètres & Contact
                    </h1>
                    <p className="text-slate-400 text-sm">Gérez les informations de contact et les liens sociaux.</p>
                </div>
                <button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition font-semibold">
                    <Save className="w-4 h-4" /> Enregistrer tout
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-indigo-400" /> Coordonnées
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-slate-400 block mb-1">Email de contact</label>
                            <input
                                value={contact.email}
                                onChange={e => setContact({ ...contact, email: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-400 block mb-1">Téléphone</label>
                            <input
                                value={contact.phone}
                                onChange={e => setContact({ ...contact, phone: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-400 block mb-1">Adresse</label>
                            <textarea
                                value={contact.address}
                                onChange={e => setContact({ ...contact, address: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 h-20"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-400 block mb-1">Iframe Google Maps (Src)</label>
                            <input
                                value={contact.googleMapsEmbed}
                                onChange={e => setContact({ ...contact, googleMapsEmbed: e.target.value })}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 text-xs text-slate-400"
                            />
                        </div>
                    </div>
                </section>

                {/* Social Links */}
                <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Share2 className="w-5 h-5 text-indigo-400" /> Réseaux Sociaux
                    </h2>
                    <div className="space-y-4">
                        {Object.entries(config.socials).map(([key, value]) => (
                            <div key={key}>
                                <label className="text-xs text-slate-400 block mb-1 uppercase">{key}</label>
                                <input
                                    value={value}
                                    onChange={e => setConfig({ ...config, socials: { ...config.socials, [key]: e.target.value } })}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
