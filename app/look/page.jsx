import styles from "./style.module.css"
export default async function Page() {

  var response = await fetch("https://test-backend-p5ig.onrender.com/full");

  var data = await response.json()
  console.log(data);
  
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