import { DesktopMenu } from "./desktop";
import { MobileMenu } from "./mobile";

export function Menu() {
  return (
    <>
      <DesktopMenu className="hidden xl:block" />
      <MobileMenu className="block xl:hidden" />
    </>
  );
}
