
// JSON ==> JAVASCRIPT OBJECT NOTATION 
// JSON OBJECT DEFINE IN = "" 

// DECLARATION

    // JS OBJ

    // let data = { name : "krish" };

    // JSON OBJ

    // let data = { "name" : "krish" };


// js object to json object

// let info = {
//     name: "Krish",
//     age: 20,
//     city: "Surat"
// }

// const data = JSON.stringify(info);
// console.log(data); 

// Output: {"name":"Krish","age":20,"city":"Surat}

        // json object to js object

// let obj = `{"name": "Krish","age": 20,"city": "Surat"}`
// let data = JSON.parse(obj);
// console.log(data);

        // Output: { name: 'Krish', age: 20, city: 'Surat'}

// STORAGE 

/* local-storage */

// let obj = {name: "Krish",age: 20,city: "Surat"}
// let data = JSON.parse(obj);

//     localStorage.setItem("hello",obj)

// let obj = {name: "Krish",age: 20,city: "Surat"}
// let data = JSON.stringify(obj);

//     localStorage.setItem("hello",data)

/*session-storage */

// let obj = {name: "Krish",age: 20,city: "Surat"}
// let data = JSON.stringify(obj);

//     sessionStorage.setItem("hello",obj)

// let obj = {name: "Krish",age: 20,city: "Surat"}
// let data = JSON.stringify(obj);

//     sessionStorage.setItem("hello",data)

    // HTML CREAT USING SCRIPT
    
// let p = document.createElement("p");
// p.textContent = "Hello , My Name Is Krish ";
// document.querySelector('body').append(p)