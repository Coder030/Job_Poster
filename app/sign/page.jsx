"use client"

import { redirect } from "next/navigation";
import "./style.css"
import { useState } from "react";
import Link from "next/link";

function Page() {
  const [name2, setName] = useState('')
  const [flag, setFlag] = useState(false)
  const [message, setMessage] = useState("")
  const [load, setLoad] = useState(false)
   function handleChange(event) {
    setName(event.target.value);
  }

  async function makeCookie() {
    try {
      setLoad(true)
      const response = await fetch("https://test-backend-p5ig.onrender.com/make_cookie", {
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
      setLoad(false)
      if(json.message === 'same'){
        setFlag(true)
      }
      else{
        setMessage("Success! New user created!")
        setFlag(false)
    }} 
    catch (error) {
      console.error('Error making cookie:', error);
    }
  }

  return (
    <>
    <h1 style={{textAlign: "center"}}>This is the sign up page. This page is for you if you have not already registered</h1>
      <div className="div1">
        <label htmlFor="username" className="lab">Username: </label>
        <input value={name2} autoComplete="off" type="text" name="username" className="inp" onChange={handleChange}/>
        <button onClick={makeCookie} className="button">Submit</button>
        <p style={{textAlign: "center", position: "relative", bottom: "30px", color: "black"}}>Already registered?</p>
        <a className="a" style={{color: "black", position: "relative", bottom: "75px", left: "31%", textDecoration: "underline"}} href="/log">Click here to log in</a>
        {load && <p className="load">Loading...</p>}
        {!load && flag && <p className="ae">This username already exists. Please choose another one?</p>}
        {!load && !flag && <p className="s">{message}</p>}
        <Link style={{textDecoration: "none"}} href="/api/post"><button className="button2">New Post</button></Link>
        <Link style={{textDecoration: "none"}} href="/api/look"><button className="button2">Find Jobs</button></Link>
      </div>
    </>
  )
}

export default Page
