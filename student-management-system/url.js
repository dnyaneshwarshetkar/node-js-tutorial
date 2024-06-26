let url = require("url");

/*let urlResponse = url.parse("http://localhost:4500/students?name=John&age=25");
console.log(urlResponse);*/

let response = new URL("http://localhost:4500/students?name=John&name=Mahesh&age=25");
console.log(response);

console.log(response.searchParams.get("name"));
console.log(response.searchParams.get("age"));
console.log(response.searchParams.getAll("name"));