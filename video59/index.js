console.log("My favorite anime is Naruto!!!");

function add(a,b){
    result=(a+b);
    console.log(result);
}
function sub(a,b){
    result=(a-b);
    console.log(result);
}
function mul(a,b){
    result=(a*b);
    console.log(result);
}
function div(a,b){
    result=(a/b);
    console.log(result);
}
function expo(a,b){
    result=(a**b);
    console.log(result);
}

let a=8;
let b=10;
if(Math.random()<0.1){
    console.log("Addition of two numbers is");
    sub(a,b);
    console.log("Multiplication of two numbers is");
    add(a,b);
    console.log("Subtraction of two numbers is");
    div(a,b);
    console.log("Division of two numbers is");
    expo(a,b);
}
else{
    console.log("Addition of two numbers is");
    add(a,b);
    console.log("Multiplication of two numbers is");
    mul(a,b);
    console.log("Subtraction of two numbers is");
    sub(a,b);
    console.log("Division of two numbers is");
    div(a,b);
}