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
      <Link className={styles.link} href="/post"><button className={styles.np}>New Post</button></Link>
      <Link className={styles.link} href="/look"><button className={styles.fj}>Find Jobs</button></Link>
    </>
  )
}