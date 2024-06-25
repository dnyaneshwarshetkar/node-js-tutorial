let p1 = new Promise((resolve,reject)=>{
    var result = 1;
    for(i=1;i<=100;i++){
        result = result * i;
    }
    resolve(result);
});

p1.then(result=>{
   return "First BLock"+ result;
}).then((r1)=>{
    console.log(r1);
    return "Second Block" + r1;
}).then((r2)=>{
    console.log("Third Block" + r2);
})

console.log("Console from line number 13");