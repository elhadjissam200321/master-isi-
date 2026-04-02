"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const INITIAL_PARTNERS = [
    { id: 1, name: "Oracle", logo: "/images/partners/oracle.png" },
    { id: 2, name: "OCP Group", logo: "/images/partners/ocp.png" },
    { id: 3, name: "Spotify", logo: "/images/partners/spotify.png" },
    { id: 4, name: "DataProtect", logo: "/images/partners/dataprotect.png" },
    { id: 5, name: "CBI", logo: "/images/partners/cbi.png" },
    { id: 6, name: "Alumni AI", logo: "/images/hero-neural.jpg" }, // placeholder for 6th item if needed, using existing image
]

export default function AnimatedPartners() {
    const [partners, setPartners] = useState(INITIAL_PARTNERS)
    const [animatingIndices, setAnimatingIndices] = useState<number[]>([])
    const isSwappingRef = useRef(false)

    useEffect(() => {
        const swapTwoImages = () => {
            if (isSwappingRef.current) return
            isSwappingRef.current = true

            // Pick two random distinct indices
            let i1 = Math.floor(Math.random() * partners.length)
            let i2 = Math.floor(Math.random() * partners.length)
            while (i2 === i1) i2 = Math.floor(Math.random() * partners.length)

            setAnimatingIndices([i1, i2])

            // After fade out (400ms), swap the sources in state
            setTimeout(() => {
                setPartners((prev) => {
                    const next = [...prev]
                    const temp = next[i1]
                    next[i1] = next[i2]
                    next[i2] = temp
                    return next
                })
            }, 400)

            // Fade back in after 1000ms
            setTimeout(() => {
                setAnimatingIndices([])
                isSwappingRef.current = false
            }, 1000)
        }

        const interval = setInterval(swapTwoImages, 3000)
        return () => clearInterval(interval)
    }, [partners.length])

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {partners.map((p, idx) => (
                <div
                    key={p.id} // use original ID to track identity
                    className="bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:shadow-md hover:border-primary/30 transition-all aspect-[3/2] group overflow-hidden"
                >
                    <div
                        className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out ${animatingIndices.includes(idx)
                            ? "blur-md opacity-0 scale-95"
                            : "blur-0 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 scale-100"
                            }`}
                    >
                        <Image
                            src={p.logo}
                            alt={`${p.name} logo`}
                            width={250}
                            height={125}
                            className="object-contain max-h-24"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
