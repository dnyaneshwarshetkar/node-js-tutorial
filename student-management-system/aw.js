let p1 = new Promise((resolve,reject)=>{
    let result = 1;
    for(let i=1;i<=100;i++){
        result = result * i;
    }
    resolve(result);
});

async function addition(){
    let result = await p1;
    console.log(result);
}

addition(20,30);

console.log("Hello");