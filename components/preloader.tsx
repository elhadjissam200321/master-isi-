"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setLoading(false), 500)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        fadeOut && "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated neural network logo */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
          
          {/* Spinning ring */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="60 140"
              className="text-primary"
            />
          </svg>

          {/* Center brain icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" />
              <path d="m15.7 10.4-.9.4" />
              <path d="m9.2 13.2-.9.4" />
              <path d="m13.6 15.47-.4-.9" />
              <path d="m10.8 9.03-.4-.9" />
              <path d="m15.7 13.6-.9-.4" />
              <path d="m9.2 10.8-.9-.4" />
              <path d="m10.4 15.7.4-.9" />
              <path d="m13.6 8.53.4-.9" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>

          {/* Floating particles */}
          <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/2 -right-1 w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          <div className="absolute top-1/2 -left-1 w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-bold text-primary tracking-wide">Master ISI</span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Chargement...</span>
        </div>
      </div>
    </div>
  )
}
