const { error } = require("console");
const fs=require("fs");

console.log("starting")
// fs.writeFileSync("shali.txt","Shali studies in CU")

fs.writeFile("shali2.txt","Shali is good",()=>{
    console.log("done")
    fs.readFile("shali2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("shali.txt","shalirobo",(e,d) => {
    console.log(d)
  
}
)
console.log("ending")