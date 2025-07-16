
// DOM => [DOCUMENT OBJERCT METHOD]

//  * Element Selection

// 1 => getElimentById
// 2 => getElimentByTagName
// 3 => getElimentByClassName
// 4 => Query Selecter / Query selecter All

// 1 => getElimentById

    let ele = document.getElementById("heading")
    console.log(ele);
    
    ele.style.fontSize = "100px";
    ele.style.color = "red";
    ele.style.background = "blue";
    ele.style.padding = "20px";
    ele.style.margin = "20px";
    ele.style.border = "2px solid black";
    ele.style.borderRadius = "20px";
    ele.style.boxShadow = "0px 0px 10px black";
    ele.style.textAlign = "center";
    ele.style.textDecoration = "underline";
    ele.style.fontFamily = "Arial";
    ele.style.fontWeight = "bold";
    ele.style.textShadow = "0px 0px 10px black";
    
    let obj = document.getElementById("inner")
    console.log(obj);

    obj.style.color = "yellow";
    obj.style.backgroundColor = "green";
    obj.style.padding = "20px";
    obj.style.margin = "20px";
    obj.style.border = "2px solid black";
    obj.style.borderRadius = "20px";
    obj.style.boxShadow = "0px 0px 10px black";
    obj.style.textAlign = "center";
    obj.style.textDecoration = "underline";
    obj.style.fontFamily = "Arial";
    obj.style.fontWeight = "bold";
    obj.style.textShadow = "0px 0px 20px blue";

// 2 => getElimentByTagName

    let ele1 = document.getElementsByTagName("h2")
    console.log(ele1);

    ele1[0].style.color = "blue";
    ele1[0].style.fontSize = "50px";
    ele1[0].style.fontWeight = "bold";
    ele1[0].style.textAlign = "center";
    ele1[0].style.textShadow = "0px 0px 10px black";
    ele1[0].style.textDecoration = "underline"
    
    let paragraph = document.getElementsByTagName("p")
    console.log(paragraph);

    paragraph[1].style.color = "green";
    paragraph[1].style.fontSize = "30px";
    paragraph[1].style.fontWeight = "bold";
    paragraph[1].style.textAlign = "center";
    paragraph[1].style.textShadow = "0px 0px 10px black";
    paragraph[1].style.textDecoration = "underline";

// 3 => getElementsByClassName

 let intro = document.getElementsByClassName("heading")
 console.log(intro);

 intro[0].style.background = "yellow";
 intro[0].style.color = "red";
 intro[0].style.padding = "20px";
 intro[0].style.margin = "20px";
 intro[0].style.border = "2px solid black";
 intro[0].style.textAlign = "center";
 intro[0].style.borderRadius = "20px";
 intro[0].style.boxShadow = "0px 0px 10px black";
 intro[0].style.fontSize = "50px";

 let known = document.getElementsByClassName("inner")
 console.log(known);

 known[0].style.background = "blue";
 known[0].style.color = "white";
 known[0].style.padding = "20px";
 known[0].style.margin = "20px";
 known[0].style.border = "2px solid black";
 known[0].style.textAlign = "center";
 known[0].style.borderRadius = "20px";
 known[0].style.boxShadow = "0px 0px 10px black";

//  4 => querySelectorAll

    let select = document.querySelectorAll("h4")
    console.log(select);

    select.forEach((ele,i) => {
        
        ele.style.color = "blue";
        ele.style.fontSize = "30px";
        ele.style.fontWeight = "bold";
        ele.style.textAlign = "center";
        ele.style.textShadow = "0px 0px 10px black";
        
    })




    
    
    