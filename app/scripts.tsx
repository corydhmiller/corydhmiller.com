"use client"

import { useEffect } from "react"
import { initializeTheme } from "@/lib/theme"

export function Scripts() {
  useEffect(() => {
    initializeTheme()
  }, [])

  return null
} 