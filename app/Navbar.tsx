"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "./logo.png";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const nothing = "";
  const han = () => {
    router.push("https://github.com/coder030");
  };
  return (
    <div className={styles.nav}>
      {
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image onClick={han} className={styles.img} src={logo} alt={""}></Image>
      }
      <div className={styles.nav2}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/api/post">
          Create Jobs
        </Link>
        <Link className={styles.link} href="/api/look">
          Find Jobs
        </Link>
        <Link className={styles.link} href="/log">
          Log in
        </Link>
        <Link className={styles.link} href="/sign">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
