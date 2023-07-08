import Link from "next/link";
import { poppins } from "../../app/layout";
import styles from "./NavLinks.module.css";

const links = [
  { link: "/", title: "Home" },
  { link: "/course", title: "12 Week Course" },
  { link: "/contact", title: "Contact" },
];

export default function NavLinks() {
  return (
    <ul className={`${styles["nav-links"]} ${poppins.className}`}>
      {links.map(({ link, title }, index) => (
        <Link key={index} href={link}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  );
}
