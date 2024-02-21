"use client"

import styles from "./styles.module.css"
import Link from "next/link"
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Page() {
  return(
    <>
      <header className={styles.header}>Job Poster</header>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!</p>
      <Link className={styles.link} href="/api/post"><button className={styles.np}>New Post</button></Link>
      <Link className={styles.link} href="/api/look"><button className={styles.fj}>Find Jobs</button></Link>
      <Link className={styles.link} href="/log"><button className={styles.np}>Log in</button></Link>
      <Link className={styles.link} href="/sign"><button className={styles.np}>Sign up</button></Link>
    </>

  )
}