"use client"

import React from "react";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import { Logo } from "./logo";
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
    const isMobile = useMobile()
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center justify-between px-4">
        <Logo />
        {/* Menú móvil o escritorio según el tamaño de pantalla */}
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
}
