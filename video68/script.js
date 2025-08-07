console.log("Shailendra");

// let boxes=document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor="red";

// document.getElementById("redbox").style.backgroundColor="magenta";

// document.querySelector(".box").style.backgroundColor = "khaki";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue";
})

// NodeList(7) [div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box]
// document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
// e=document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
// e[4].matches("#redbox")
// true
// e[3].matches("#redbox")
// false

// e=document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
// e[3].closest("#redbox")
// null
// e[3].closest(".container")
// <div class=​"container">​…​</div>​
// e[3].closest("html")
// <html lang=​"en">​scroll<head>​…​</head>​<body>​…​</body>​</html>​
// document.querySelector(".container").contains(e[2])
// true
// document.querySelector(".container").contains(e[0])
// true
// document.querySelector(".container").contains(document.querySelector("body")
// VM7293:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// document.querySelector(".container").contains(document.querySelector("body"))
// false
// document.querySelector("body").contains(document.querySelector(".container"))
// true