import styles from "./style.module.css"
import Link from "next/link"
import { redirect } from "next/navigation";

export default function Page() {
    const createAccount = async (formData: FormData) => {
      "use server";
      const company = formData.get("company");
      const post = formData.get("post");
      const contact = formData.get("contact");
      const contactE = formData.get("contactE");


      const ob1 = {"company": company, "post":post, "phone_num":contact, "email":contactE}
      fetch("https://test-backend-p5ig.onrender.com/", {
      method: 'POST',
      body: JSON.stringify({
        item: ob1
      }),
      headers: {'Content-Type': 'application/json'},
      })
      redirect("/look")
    };
    return (

      <>
        <h1 className={styles.headering}>Post new job</h1>
        <hr className={styles.h}/>
        <form action={createAccount} className={styles.form}>
        
          <label id={styles.compLab} htmlFor="company">Company: </label>
          <br />
          <input type="text" name="company" id={styles.compInp} autoComplete="off"/>
          <br />
          <label id={styles.postLab} htmlFor="post">Post: </label>
          <br />
          <input type="text" name="post" id={styles.postInp} autoComplete="off"/>
          <br />
          <label id={styles.contactLab} htmlFor="contact">Contact Number: </label>
          <br />
          <input type="text" name="contact" id={styles.contactInp} autoComplete="off"/>
          <br />
          <label id={styles.contactELab} htmlFor="contactE">Contact Email: </label>
          <br />
          <input type="text" name="contactE" id={styles.contactEInp} autoComplete="off"/>
          <button className={styles.butt} type="submit">
            Create
          </button>
        </form>
        {/* <Link className="link" href="/"><button>Return to home page</button></Link> */}
      </>
    )
  }