
let i = [
    {
        url: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        url: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    
    {
        url: "https://images.pexels.com/photos/19872371/pexels-photo-19872371/free-photo-of-the-lake-bled-is-surrounded-by-green-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        url: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg"
    }

]

let index = 0;
let prev = (() =>{
    if(index == 0){
        index = i.length - 1;
    }
    else{
        index--;
    }
    display()
} )


let next = (() =>{
    if(index == i.length - 1){
        index = 0;
    }
    else{
        index++;
    }
    display()
} )

let display = () => {

    document.getElementById("img").src = i[index].url

} 
display();

