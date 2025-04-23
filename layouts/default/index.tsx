import React from "react";
import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <main className="flex-1 py-4">{children}</main>
      <Footer />
    </Container>
  );
}
