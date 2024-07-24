import Link from "next/link";
import { Logo } from "../Logo/Logo";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
}
