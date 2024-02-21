"use client";

import { useState } from "react";
import Link from "next/link";
import "./style.css";

function Page() {
  const [name2, setName] = useState('');
  const [message, setMessage] = useState('');
  const [flag, setFlag] = useState(true);
  const [load, setLoad] = useState(false)
  function handleChange(event) {
    setName(event.target.value);
  }
  
  async function fetchCookie() {
    console.log("hello" + name2);
    try {
      setLoad(true)
      const response = await fetch("https://test-backend-p5ig.onrender.com/get_cookie", {
        method: 'POST',
        body: JSON.stringify({
          name: name2
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      console.log(json);
      setLoad(false)
      if (json.data === "nf") {
        setMessage("Sorry. The user is not found. Please check if there is a typo error. Else, you are a new user, please sign in to continue");
        setFlag(false);
      } else {
        setMessage("Success! The user has been found");
        process.env.logged
        setFlag(true);
      }
    } catch (error) {
      console.error('Error fetching cookie:', error);
      setMessage("Error fetching cookie");
    }
    console.log(flag);
  }

  return (
    <>
    <h1 style={{textAlign: "center"}}>This is the log in page. This page is for you if you have already registered</h1>
      <div className="div1">
        <label htmlFor="username" className="lab">Username: </label>
        <input value={name2} autoComplete="off" type="text" name="username" className="inp" onChange={handleChange}/>
        <button onClick={fetchCookie} className="button">Submit</button>
        <p style={{textAlign: "center", position: "relative", bottom: "30px", color: "black"}}>New here?</p>
        <a className="a" style={{color: "black", position: "relative", bottom: "75px", left: "31%", textDecoration: "underline"}} href="/sign">Click here to sign in</a>
        {load && <p className="load">Loading...</p>}
        {!load && <p className={`fornf${flag ? '': 'nf'}`}>{message}</p>}
        <Link style={{textDecoration: "none"}} href="/api/post"><button className="button2">New Post</button></Link>
        <Link style={{textDecoration: "none"}} href="/api/look"><button className="button2">Find Jobs</button></Link>
      </div>
    </>
  );
}

export default Page;