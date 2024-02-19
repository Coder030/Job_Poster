import styles from "./style.css"
import Link from "next/link"

export default async function Page() {
  try {
    const flag = true;
    const response = await fetch("http://localhost:2000/api/full", { 
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
    console.log("Response data:", data);

    if (Array.isArray(data) && data.length > 0) {
      return (
        <>
          <h1 className="head">Welcome to Finder!</h1>
          <p className="heading">You can find whatever job you want here</p>
          {data.map((mai) => (
            <div className="things" key={mai.company}>
              <p className="comp">{mai.company} - {mai.post}</p>
              <p className="inf">Contact Information - </p>
              <p className="ph">Phone Number: {mai.phone_num}</p>
              <p className='e'>Email: {mai.email}</p>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          <h1 className="head">Welcome to Finder!</h1>
          <p className="heading">You can find whatever job you want here</p>
          <p className="sorry">Sorry, the list is empty right now.</p>
          <Link className="sorryLink" href="/">Either try reloading or click here to go back to the home page</Link>
        </>
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // You may want to handle the error or display an error message here
  }
}