// For Loop

/*for(intialization;condition;incrementOR Decrement){

}*/

for(let i=10;i>=0;i--){
    console.log(i);
}
//console.log(i);
/*initialization
while(condition){

    increment/decrement
}*/

j = 10;
while(j>=0){
    console.log(j);
    j--;
}

console.log(j);

/*initilization
do{

    increment/decrement
}while(condition)*/

k = 10;
do{
    console.log(k);
    k--;
}while(k>=0);

console.log(k);

p1 = {name: "John Doe",age:25,gender:"Male"}

//p1.name
//p1["name"]
for(let key in p1){
    console.log(key,p1[key]);
}


let hobbies = ["Painting","Dancing","Reading","Watching Movies","Cooking"];

for(let singleHobby of hobbies){
    console.log(singleHobby);
}



