var a = 67;
//a = true;

//a = "this is text";

console.log(typeof a);

var a = 20;
console.log(a);

const MAX_NUM = Infinity;

//MAX_NUM = 20;

// number
let num1 = 30;

console.log(typeof num1);

// string
let text1 = "This is string";

console.log(typeof text1);

// boolean
let b1 = true;

console.log(typeof b1);

// null / undefined
let empty;

console.log(typeof empty)

empty = 100;

console.log(typeof empty);

empty = null;

console.log(typeof empty)

// object
var obj1 = {
    sg: true,
    model: "S3",
    color: "blue",
    is5G: true,
    price: 6000,
    on: function(){

    },
    off: function(){

    }
}

console.log(typeof obj1);

let arr1 = [10,20,30,40];

console.log(typeof arr1);

// function type anonymous function
let sum = function(num1,num2){
    return num1 + num2;
}

function sum1(num1,num2){

}

sum(10,20);
sum1(30,40);

console.log(typeof sum)

// classes

class Person {
    name = "";
    gender = "";
    age = 0;
    constructor(name,gender, age){
        this.gender = gender;
        this.name = name;
        this.age = age;
    }

    isAdult(){
        return this.age>18 ? true : false;
    }
}

let p1 = new Person("John Doe", "MALE", 19);

console.log(p1.name);
console.log(p1.gender);
console.log("Is p1 adult?", p1.isAdult());

console.log(typeof p1);

// InstanceOf

console.log(p1 instanceof Person);


// Arrow Functions

let sub = (num1,num2)=>{
    return num1 - num2;
}

console.log(sub(30,40));