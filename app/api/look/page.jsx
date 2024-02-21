"use client"

import React, { useEffect, useState } from "react";
import styles from "./style.module.css"
import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "@/app/context";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page() {
  const [data2, setData2] = useState(null)
  const [data3, setData3] = useState(null)
  const {userData, setUserData} = useContext(UserContext)
  const [flag, setFlag] = useState(false)
  try {
    const flag = true;
    useEffect(() => {
      const fetchData = async () => {
        const me = await fetch("https://test-backend-p5ig.onrender.com/api/me", {
          method: "GET",
          credentials: "include",
          withCredentials: true,
          cache: "no-store",
          headers: {'Content-Type': 'application/json'},
        })
        var data1 = await me.json()
        const response = await fetch("https://test-backend-p5ig.onrender.com/api/full", { 
        method: "GET",
        credentials: "include",
        withCredentials: true,
        cache: "no-store" ,
        headers: {'Content-Type': 'application/json'},
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      var data = await response.json();
      setData2(data)
      setData3(data1['message']['id'])
      }
      fetchData()
    }, [data2])
    if(data2.message === "nvt"){
      return(
      <>
        <p style={{textAlign: "center", fontSize: "35px"}}>Please login first...</p>
        <Link className={styles.l} href="/log">Login</Link>
        <Link className={styles.s} href="/sign">Signin</Link>
        </>
        )
    }
    else{
      if (data2.length > 0) {
        return (
          <>
            <h1 className={styles.head}>Welcome to Finder!</h1>
            <p className={styles.heading}>You can find whatever job you want here</p>
            {data2.map((mai) => (
              <div className={styles.things} key={mai.company}>
                <p className={styles.comp}>{mai.company} - {mai.post}</p>
                <p className={styles.inf}>Contact Information - </p>
                <p className={styles.ph}>Phone Number: {mai.phone_num}</p>
                <p className={styles.e}>Email: {mai.email}</p>
                {(mai.belongsToId === data3) && <button className={styles.button} onClick={async () => {
                  setFlag(true)
                  const response = await fetch(`https://test-backend-p5ig.onrender.com/api/${mai.JobID}`, {
                    method: "DELETE",
                    credentials: "include",
                    withCredentials: true,
                    cache: "no-store",
                    headers: {'Content-Type': 'application/json'},

                  })
                }}>Close this?</button>}
                {/* <Link style={{textDecoration: "none", color:"white"}} href="/"></Link> */}
              </div>
            ))}
          <div className={styles.tis}>
              <Link className={styles.link} href="/api/post"><button className={styles.np2}>New Post</button></Link>
              <Link className={styles.link} href="/"><button className={styles.np2}>Home</button></Link>
            </div>
          </>
        );
      } else {
        return (
          <>
            <h1 className={styles.head}>Welcome to Finder!</h1>
            <p className={styles.heading}>You can find whatever job you want here</p>
            <p className={styles.sorry}>Sorry, the list is empty right now.</p>
            <div className={styles.tis}>
              <Link className={styles.link} href="/api/post"><button className={styles.np2}>New Post</button></Link>
              <Link className={styles.link} href="/"><button className={styles.np2}>Home</button></Link>
            </div>
          </>
        );
      }
  }
  } catch (error) {
    console.error("Error fetching data:", error);
    // You may want to handle the error or display an error message here
  }
}