"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import { SocialMediaItem } from "./SocialMediaItem";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">Nasa Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="/socialmedia/icons8-facebook-48.png"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="/socialmedia/icons8-instagram-48.png"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://tiktok.com"
            title="TikTok"
            icon="/socialmedia/icons8-tiktok.svg"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://linkedin.com"
            title="LinkedIn"
            icon="/socialmedia/icons8-linkedin.svg"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://google.com"
            title="On The Streets At Night"
            icon="/socialmedia/icons8-night-100.png"
          ></SocialMediaItem>
        </ul>
      </div>
    </footer>
  );
};
