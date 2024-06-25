let a = 10;
let b = 20;
let c = a + b;

setTimeout(()=>{
    console.log("This console is from SetTImeout");
},1000);

console.log(c);

function addition(num1,num2, callback){
    setTimeout(()=>{
        callback(num1 + num2);
    },1000);
}

// API CALLS

function showResult(result){
    console.log(result);
}

addition(20,30, showResult);

console.log("This is line numer 25");

