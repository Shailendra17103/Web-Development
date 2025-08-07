console.log("Hello World");

// document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild

// <div class=​"container">​…​</div>​
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0]
// <div class=​"box">​Box1​</div>​
// document.body.firstElementChild.children[1]
// <div class=​"box">​Box2​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box">​Box5​</div>​
// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​Box3​</div>​
// document.body.firstElementChild.children[3].previousSibling