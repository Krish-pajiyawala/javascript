
//  1 => wap to print expected output using the following array.

// let color = ["Red","Green","White","Black"];
// {
//     console.log(color);
    
// }
//         console.log(color.join(","));
//         console.log(color.join("+"));
//         color.pop()
//         console.log(color.join(","));
//         console.log(color.shift());
//         console.log(color.join());
//         color.unshift("red")
//         color.push("black,orange")
//         console.log(color.join(","));

// output

    // Red,Green,White,Black
    // Red+Green+White+Black
    // Red,Green,White
    // Red
    // Green,White
    // Red,red,Green,White,black,orange

// 2 => wap to get the sum of all array element using for loop and foreach loop.

    // let numbers = [10, 20, 30, 40, 50];

    // (a) FOR LOOP

    // let a = 0;

    // for(let i = 0; i < numbers.length; i++) 
    // {
    //     a += numbers[i];
    // }
    // console.log("a using for loop:", a);

    // (B) FOREACH LOOP

    // let b = 0;
    // numbers.forEach(num => {
    //     b += num;
    // });
    // console.log("b using forEach:", b);

    // output

    // (a) => a using for loop: 150
    // (b) => b using forEach: 150

// 3 => wap to print maximum and minimum value given array.
    
    //  a = [10,20,30]

    // let find = (para) => {
    //     let max = para.reduce((a,b)=>{
    //         if(a>b){
    //             return a;
    //         }else{
    //             return b;
    //         }
    //     });
    //     let min = para.reduce((a,b)=>{
    //         if(a<b){
    //             return a;
    //         }else{
    //             return b;
    //         }
    //     });
    // console.log("Maximum value:", max);
    // console.log("Minimum value:", min);
    // }
    // find(a)

    // Output
    // Maximum value: 30
    // Minimum value: 10

//  4 => Write a JavaScript program to convert all array elements into ASCII values.

    // let a = ['k', 'r', 'i', 's' , 'h'];
    // let asciiValues = a.map((ele,i)=>{
    //     return ele.charCodeAt(0);
    // });
    // console.log(asciiValues);

    // output

    // ['k', 'r', 'i', 's' , 'h'] - - > [ 107, 114, 105, 115, 104 ]

// 5 => Write a JavaScript program to remove negative values using the filter array function.

    // let numbers = [-23,-20,-17,-12,-5, 0, 1, 5, 12, 19, 20];

    // let positiveNumbers = numbers.filter((num) => {
    //     return num >=0;
    //     });
    //     console.log(positiveNumbers);

    // output

    //  [0, 1, 5, 12, 19, 20]

// 6 => Write a JavaScript program using array map() method and return the square of the array element. 

    //  let arr = [2, 5, 6, 3, 8, 9]; 

    //     let square = arr.map((ele,i)=>{
    //         return ele * ele
    //     })
    //     console.log("Original Array:", arr);
    //     console.log("Squared Array:", square);

        // output

        // Original Array: [2, 5, 6, 3, 8, 9]
        // Squared Array: [4, 25, 36, 9, 64, 81]

// 7 => Write a JavaScript program for sorting an array in ascending descending.

    // let numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
    // let myColor = ["Red", "Green", "White", "Black"];

    // let ascNumbers = numbers.sort((a,b)=>{
    //     return a - b   
    // })

    // console.log("Ascending:", ascNumbers);
    // console.log("Descending:", numbers.reverse());
    // console.log("Colors A-Z:" , myColor.sort());
    // console.log("Colors Z-A:", myColor.reverse());

    // output
    // Ascending: [ 0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23 ]
    // Descending: [ 23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0 ]
    // Colors A-Z: [ 'Black', 'Green', 'Red', 'White' ]
    // Colors Z-A: [ 'White', 'Red', 'Green', 'Black' ]

// 8 => Write a JavaScript program which filters out any string which is less than 8 characters.

    // let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

    // let filters = words.filter((ele,i)=>{
    //     return ele.length < 8
    // })
    // console.log(filters);   

    // output
    // ['Go', 'Java', 'PHP', 'Ruby']

// 9 => write a JavaScript program to print expected output for the following string.

    // x = "airplane"; output:- r 
    // x = "oxoxoxox"; output:- "oXoXoXoX"  
    // x = "A New Java Book"; 

    // let x1 = "airplane";
    // console.log(x1[2]);

    // output
    // r

    // let x2 = "oxoxoxox";
    // let str = "";

    // for (let i = 0; i < x2.length; i++) {
    // if (i % 2 === 0) {
    //     str += x2[i].toUpperCase();
    // } else {
    //     str += x2[i];
    // }
    // }
    // console.log(str);

    // output
    // oXoXoXoX

    //  let x3 = "A New Java Book";
    //  lowercase = x3.toLowerCase()
    //  uppercase = x3.toUpperCase()

    //  console.log(`"${lowercase}" , "${uppercase}`)
     
     // output
     // "a new java book" , "A NEW JAVA BOOK"

// 10 => write a JavaScript program for array reverse.

    // let a = [10,20,30,40,50,60,70,80,90,100];
    // let reversed = a.reverse();
    // console.log("Array Reverse :", reversed);

    // output
    // Array Reverse : [100, 90, 80, 70, 60, 50, 40, 30, 20, 10 ]

// 11 => write a JavaScript program to check if a value is found or not? 

    // let a = [10,20,30,40,50,60,70,80,90,100];
    // let foundValue = Number(prompt("Enter number to check in array"))

    // if(a.includes(foundValue)){
    //     console.log("Value is Found");
    // }else{
    //     console.log("Value is Not Found");  
    // }

    // output
    // 10--Value is Found
    // 110--Value is Not Found

// 12 => write a JavaScript program to print your name and write the number of total characters.

    // let Name = "Krish";
    // let totalChars = Name.length;
    // console.log(`Name : ${Name}`);
    // console.log(`Total Characters : ${totalChars}`);

    // output
    // Name : Krish
    // Total Characters : 5

// 13 => write a JavaScript program given this output using replace concept.

    // let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

    // let output = input.replaceAll("dog", "cat");

    // console.log(output);

    // output
    // I often take a walk with my cat in the evening. His cat follows him everywhere.

// 14 => write a JavaScript program convert string to array.

    // let input = "Hire the top 1% freelance developers";

    // let words = input.split(" ");
    // let result = words.slice(0, 4);

    // console.log(result);

    // output
    // [ 'Hire', 'the', 'top', '1%' ]

// 15 =>  write a JavaScript program to convert an array to string.

    // let input = ['5', 32, 'Daniel'];
    // console.log(input.join(","));

    // output
    // 5,32,Daniel