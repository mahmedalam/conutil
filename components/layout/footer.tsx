import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground flex flex-col md:flex-row justify-between items-center gap-4 p-6 md:px-14 md:py-11 text-center">
      <p>
        © {new Date().getFullYear()} ConUtil. Open source under the MIT License.
      </p>
      <ul className="flex gap-4 md:gap-8">
        {footerLinks.map((link) => (
          <li
            key={link.name}
            className="hover:opacity-75 transition-opacity underline"
          >
            <Link href={link.href} target="_blank">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
