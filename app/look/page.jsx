import { log } from "console";
import "./style.css"

export default async function Page() {

  var response = await fetch("https://test-backend-p5ig.onrender.com/full");

  var data = await response.json()
  console.log(data);
  
  return(
    <>
      <h1>Welcome to Finder!</h1>
      <p className="heading">You can find whatever job you want here</p>
      {/* {JSON.stringify(data)} */}
      {data.map(mai => 
      <div className="things" key={mai.company}>
        <p className="comp">{mai.company} - {mai.post}</p>
        <p className="inf">Contact Information - </p>
        <p>Phone Number: {mai.phone_num}</p>
        <p>Email: {mai.email}</p>
      </div>
      )}
    </>
  )
}