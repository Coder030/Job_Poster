import styles from "./style.module.css"
import Link from "next/link"

export default async function Page() {

  var flag = true
  var response = await fetch("https://test-backend-p5ig.onrender.com/full", {cache:"no-store"});

  var data = await response.json()
  if (data.length === 0){
    flag = false
  }
  
  if(flag){
    return(
      <>
        <h1 className={styles.head}>Welcome to Finder!</h1>
        <p className={styles.heading}>You can find whatever job you want here</p>
        {/* {JSON.stringify(data)} */}
        {data.map(mai => 
        <div className={styles.things} key={mai.company}>
          <p className={styles.comp}>{mai.company} - {mai.post}</p>
          <p className={styles.inf}>Contact Information - </p>
          <p className={styles.ph}>Phone Number: {mai.phone_num}</p>
          <p className={styles.e}>Email: {mai.email}</p>
        </div>
        )}
      </>
    )
  }
  else{
    return(
      <>
        <h1 className={styles.head}>Welcome to Finder!</h1>
        <p className={styles.heading}>You can find whatever job you want here</p>
        <p className="sorry">Sorry the list is empty right now.</p>
        <Link className="sorryLink" href="/">Either try reloading or click here to go back to home page</Link>
      </>
    )
  }
}