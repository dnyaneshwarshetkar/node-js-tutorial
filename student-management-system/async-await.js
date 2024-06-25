

async function multiplication(){
    let nullPromise = new Promise((resolve,reject)=>{
        resolve("This is null promise");
    })
    let nullResult = await nullPromise;
    console.log(nullResult);
    let p1 = new Promise((resolve,reject)=>{
        let result = 1;
        for(let i=1;i<=5;i++){
            result = result * i;
            console.log(result);
        }
        resolve(result);
    })
    let result = await p1;

    console.log(result);   
}

multiplication();

console.log("This is ousite the function");