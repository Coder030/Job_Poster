"use client";

import styles from "./style.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [comp, setComp] = useState("");
  const [post, setPost] = useState("");
  const [phn, setPhn] = useState("");
  const [em, setEm] = useState("");
  useEffect(() => {
    const hay = async () => {
      const response = await fetch("https://test-backend-p5ig.onrender.com/api/check", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json() 
      if (data.message === "nvt") {
        console.log("hello");
        
        setFlag2(true);
      }
    }
    hay()
  })
  const compfunc = (e: any) => {
    setComp(e.target.value);
  };
  function postfunc(e: any) {
    setPost(e.target.value);
  }
  const phnfunc = (e: any) => {
    setPhn(e.target.value);
  };
  const emfunc = (e: any) => {
    setEm(e.target.value);
  };
  const createAccount = async () => {
    const response = await fetch("https://test-backend-p5ig.onrender.com/api", {
      method: "POST",
      body: JSON.stringify({
        item: {
          company: comp,
          post: post,
          phone_num: phn,
          email: em,
        },
      }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    if (data.message === "nvt") {
      setFlag2(true);
    } else {
      redirect("/api/look");
    }
  };
  if (flag2) {
    return (
      <>
        <p style={{ textAlign: "center", fontSize: "35px" }}>
          Please login first...
        </p>
        <Link className={styles.l} href="/log">
          Login
        </Link>
        <Link className={styles.s} href="/sign">
          Signin
        </Link>
      </>
    );
  } else {
    return (
      <div className={styles.nopey}>
        <h1 className={styles.headering}>Post new job</h1>
        <hr className={styles.h} />
        <form action={createAccount} className={styles.form}>
          <label id={styles.compLab} htmlFor="company">
            Company:{" "}
          </label>
          <br />
          <input
            type="text"
            value={comp}
            name="company"
            id={styles.compInp}
            autoComplete="off"
            onChange={compfunc}
            required
          />
          <br />
          <label id={styles.postLab} htmlFor="post">
            Post:{" "}
          </label>
          <br />
          <input
            value={post}
            type="text"
            name="post"
            id={styles.postInp}
            autoComplete="off"
            onChange={postfunc}
            required
          />
          <br />
          <label id={styles.contactLab} htmlFor="contact">
            Phone Number:{" "}
          </label>
          <br />
          <input
            value={phn}
            type="text"
            name="contact"
            id={styles.contactInp}
            autoComplete="off"
            onChange={phnfunc}
            required
          />
          <br />
          <label id={styles.contactELab} htmlFor="contactE">
            Email:{" "}
          </label>
          <br />
          <input
            value={em}
            type="text"
            name="contactE"
            id={styles.contactEInp}
            autoComplete="off"
            onChange={emfunc}
            required
          />
          {flag && <p>Please provide all the fields</p>}
          <button className={styles.butt} type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}
