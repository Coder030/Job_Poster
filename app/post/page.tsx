import Link from "next/link"
import "./style.css"
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
        <h1 className="headering">Post new job</h1>
        <hr />
        <form action={createAccount} className="form">
        
          <label id="compLab" htmlFor="company">Company: </label>
          <br />
          <input type="text" name="company" id="compInp" autoComplete="off"/>
          <br />
          <label id="postLab" htmlFor="post">Post: </label>
          <br />
          <input type="text" name="post" id="postInp" autoComplete="off"/>
          <br />
          <label id="contactLab" htmlFor="contact">Contact Number: </label>
          <br />
          <input type="text" name="contact" id="contactInp" autoComplete="off"/>
          <br />
          <label id="contactELab" htmlFor="contactE">Contact Email: </label>
          <br />
          <input type="text" name="contactE" id="contactEInp" autoComplete="off"/>
          <button className="butt" type="submit">
            Create
          </button>
        </form>
        {/* <Link className="link" href="/"><button>Return to home page</button></Link> */}
      </>
    )
  }