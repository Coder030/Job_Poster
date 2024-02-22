"use client"

import styles from "./styles.module.css"
import Link from "next/link"
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import logo1 from "./ph1.png"
import logo2 from "./ph2.png"
import Image from "next/image";

export default function Page() {
  return(
    <>
      <header className={styles.header}>Job Poster</header>
      <p className={styles.p}>Hello there! This is my project. I am Kartik Garg, of class 6th. I love coding and have made many projects 👨🏻‍💻. In the footer below... you can see some of the best of them. I hope you like this project. Please go on and look at my project... but do not forget. Before you move on, please log in or sign up! 😁</p>
      <div className={styles.slot1}>
        <Image className={styles.i1} src={logo1} alt={""}></Image>
        <Image className={styles.i1} src={logo2} alt={""}></Image>
      </div>
      
    </>

  )
}