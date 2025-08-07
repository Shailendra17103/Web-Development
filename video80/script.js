// console.log("My name is Shailendra");

// let obj={
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is created...")
    }
    eats(){
        console.log("Khaa rha hoon")
    }
    jumps(){
        console.log("kud rha hoon...")
    }

}

class Lion extends Animal{
    constructor(name){
        super(name);
        this.name=name;
        console.log("Object is create and he is a lion...")
    }
    eats(){
        super.eats();
        console.log("Khaa rha hoon sher hu meri jaan")
    }

}
let a =new Animal("Bunny");
console.log(a);

let l=new Lion("Sher");
console.log(l);