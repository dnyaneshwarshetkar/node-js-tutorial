function getFullName(){
    firstName = "John";
    lastName = "Doe";
    { 
        var num1 = 20;
        var num2 = 30;
        console.log(num1,num2);
    }
    console.log(num1,num2);
    return firstName + " " + lastName;
}
getFullName();

console.log(firstName, lastName);
console.log(num1,num2);

console.log(globalThis);