"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

const NavItem = ({ title, href, isActive }) => (
  <li
    className={classNames(styles.navbarLinks, {
      [styles.isLinkActive]: isActive,
    })}
  >
    <Link href={href}>{title}</Link>
  </li>
);

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              href={item.link}
              isActive={item.link === currentPath}
              index={index}
            />
          ))}
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
