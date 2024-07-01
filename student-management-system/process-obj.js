console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV === "production"){
    console.log("Production Environment");
} else {
    console.log("Development Environment");
}
