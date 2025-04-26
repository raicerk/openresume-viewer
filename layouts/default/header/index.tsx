"use client";

import { Logo } from "./logo";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center justify-between px-4">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}
