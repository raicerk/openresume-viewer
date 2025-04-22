import { HorizontalMenu } from "./horizontal-menu";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center justify-between px-4">
        <Logo />

        <HorizontalMenu />
      </div>
    </header>
  );
}
