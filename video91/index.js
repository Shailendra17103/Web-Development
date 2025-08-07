// Write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become

// 1. name.jpg
// 2.name.png
// 3.this.pdf
// 4.shali.zip
// 5.Rohan.zip
// 6.cat.jpg

// this:
// jpg/name.png
// pdf/this.pdf odf/shali.pdf
// zip/shali.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\shail\\OneDrive\\Desktop\\Codes\\Sigma Web Dev Course\\video91"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext)
    if( ext!="js" && ext!="json" && item.split(".").length>1){

    
    if (fsn.existsSync(path.join(basepath, ext))){
        // Move the file to this directory if its not a js or json file
        fs.rename(path.join(basepath, item), path.join(basepath, ext, item))

    }
    else {
        fs.mkdir(ext)
    }
}
}