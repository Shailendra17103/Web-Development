function nice(name) {
    console.log("Hey "+name+" you are nice");
    console.log("Hey "+name+" you are good");
    console.log("Hey "+name+" your T-Shirt is nice");
    console.log("Hey "+name+" your programming is good too");
}

function sum(a,b){
    // console.log(a+b);
    return (a+b);
}
result=sum(3,5);
console.log("The sum of these numbers is:",result);

// nice("Roshan");

// nice("Phoenix");

// console.log("Hey Shailendra you are nice");
// console.log("Hey Shailendra you are good");
// console.log("Hey Shailendra your T-Shirt is nice");
// console.log("Hey Shailendra your programming is good too");

const func1=(x)=>{
    console.log("I am an arrow function",x);
}
func1(23);
func1(234);
func1(65);
