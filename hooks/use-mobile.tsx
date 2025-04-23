"use client"

import { useEffect, useState } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint en Tailwind
    }

    // Comprobar al inicio
    checkIfMobile()

    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkIfMobile)

    // Limpiar el evento al desmontar
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}
