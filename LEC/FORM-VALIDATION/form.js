
document.querySelector("form").addEventListener('submit' , (event) => {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    if(name.value == ""){
        name.setAttribute("placeholder", " Enter your Name ")
    }
})