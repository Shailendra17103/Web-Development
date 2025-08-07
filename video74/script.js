console.log("My name is Phoenix");

let button=document.getElementById("btn");

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>Yayy you we clicked</b> Enjoy your click!";

})
button.addEventListener("contextmenu",()=>{
    alert("dont hack us by Right Click please");

})
document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode);

})
