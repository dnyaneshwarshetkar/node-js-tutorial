let no = 100;
function multiplication(callbackFn){
    setTimeout(()=>{
        var result = 1;
        for(i=1;i<=no;i++){
            result = result * i;
        }
        callbackFn(result);
    })
}

/*multiplication(100,function(){
    console.log(result);
});*/

multiplication((result)=>{
    console.log(result);
})


console.log("this console is from line number 8");