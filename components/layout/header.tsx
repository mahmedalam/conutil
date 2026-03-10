import { navLinks } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-secondary text-secondary-foreground flex justify-between items-center px-4 md:px-8 py-4">
      <Link
        href="/"
        className="text-2xl md:text-4xl font-extrabold tracking-tight"
      >
        CONUTIL
      </Link>
      <nav>
        <ul className="flex gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:opacity-75 transition-opacity font-medium text-base md:text-lg"
            >
              <Link href={link.href} target={link.newTab ? "_blank" : "_self"}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
