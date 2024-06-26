fetch("http://localhost:3000/students").then(data=>{
    data.json().then(data=>{
        console.log(data);
    })
})

fetch("http://localhost:3000/students",{
    method: "POST",
    body: JSON.stringify({
        name: "Dnyaneshwar",
        gender: "MALE"
    })
}).then(data=>{
    data.json().then(data=>{
        console.log(data);
    });
})