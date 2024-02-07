"use client"

import "./styles.module.css"
import Link from "next/link"
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Page() {
  return(
    <>
      <header className="header">Job Poster</header>
      <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore iste veritatis voluptatum, eveniet voluptas eos beatae deleniti autem corporis, nemo veniam sint quis! In ut vel magni quas cumque!</p>
      <Link className="link" href="/post"><button className="np">New Post</button></Link>
      <Link className="link" href="/look"><button className="fj">Find Jobs</button></Link>
    </>
  )
}