import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footers}>
      <p className={styles.isP}>Expense Tracker</p>
      <Link
        style={{ textDecoration: "none" }}
        href="https://expense-tracker-eight-gilt.vercel.app/"
      >
        <p className={styles.isLink}>
          https://expense-tracker-eight-gilt.vercel.app/
        </p>
      </Link>
      <p className={styles.isP}>Todo App</p>
      <Link
        style={{ textDecoration: "none" }}
        href="https://to-do-list-bay-pi.vercel.app/"
      >
        <p className={styles.isLink}>https://to-do-list-bay-pi.vercel.app/</p>
      </Link>
    </div>
  );
}

export default Footer;
