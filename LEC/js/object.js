
// let person  = {
//     name : "Krish",
//     age : 20 ,
//     hobbies : ['gaming','coding','foody'],
//     address : {
//         street : "Kamrej",
//         city : "Surat",
//         state : "Gujrat",
//         pin : "394185"
//         }
// }

// console.log(person);
// console.log(person.age);
// console.log(person.address);

// for in loop -> [Object loop]

// for(let key in person){
    //     console.log(`${key} = ${person[key]}`);
    // }
    
    // let data = [1,2,3,4,5];

// for in loop -> [Array loop]

    // for(let index in data){
    //     console.log(`${index} = ${data[index]}`);
    // }

    // for of loop -> [Array loop]

    // for(let value of data){
        // console.log(value);
    //     console.log(person.hobbies[1]);
    // }

// Q-U-O-T-E-S 

    let index = 0;
    let data = [
        {   
            quote: "What you do today can improve all your tomorrows.",
            author: "Ralph Marston"
        },
        {
            quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            author: "Zig Ziglar"
        },
        {
            quote: "Intelligence without ambition is a bird without wings.",
            author: "Salvador Dali"
        },
        {
            quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
            author: "Epictetus"
        },
        {
            quote: "We may encounter many defeats but we must not be defeated.",
            author: "May Angelou"
        },
        {
            quote: "Problems are not stop signs, they are guidelines.",
            author: "Robert H. Schuller"
        }
    ]

console.log(data)

let prev = (() =>{
    if(index == 0){
        index = data.length - 1;
    }
    else{
        index--;
    }
    display()
} )


let next = (() =>{
    if(index == data.length - 1){
        index = 0;
    }
    else{
        index++;
    }
    display()
} )

let display = () => {

    document.getElementById("quote").innerHTML = data[index].quote ;
    document.getElementById("author").innerHTML = data[index].author;

} 
display()