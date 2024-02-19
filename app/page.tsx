"use client"

import styles from "./styles.module.css"
import Link from "next/link"
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Page() {
  const handleClick1 = () => {
    process.env.last_link = "post"
  }
  const handleClick2 = () => {
    process.env.last_link = "look"
  }
  return(
    <>
      <header className={styles.header}>Job Poster</header>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!</p>
      <Link onClick={handleClick1} className={styles.link} href="/api/post"><button className={styles.np}>New Post</button></Link>
      <Link onClick={handleClick2} className={styles.link} href="/api/look"><button className={styles.fj}>Find Jobs</button></Link>
    </>
  )
}