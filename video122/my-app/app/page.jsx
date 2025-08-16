// "use client"; // Required in Next.js app/ directory when using hooks
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

// import { useState, useEffect } from "react";

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("Hey I am Shali")
  let a=fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (
    <div>
      <Navbar/>
      I am a component 
      {/* {count} */}
      {/* <button onClick={()=>setCount(count+1)}>Click Me</button> */}
    </div>
  );
}
