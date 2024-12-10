"use client"

import { useEffect } from "react"
import { initializeDarkMode } from "./darkMode"

export function Scripts() {
  useEffect(() => {
    initializeDarkMode()
  }, [])

  return null
} 