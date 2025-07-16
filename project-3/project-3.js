
// 1 => Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop

//     let n = Number(prompt("Enter your number:"));

    // let i = 1
    // while (i <= 10) {
    //     console.log(n + " x " + i + " =  " + n * i);
    //     i++
    // }

    // Otuput

// => 1 * 1 =1
// => 1 * 2 =2
// => 1 * 3 =3

// 2 => Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop.

    // let n = Number(prompt("Enter your number:"));
    // fac = 1;

    // let i = 1;
    // while (i <= n) {
    // fac = fac * i;
    // i++

    // }
    // console.log(fac);

    // Output

// 1 * 2 * 3 * 4 * 5 => 120

// 3 => Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop.

    // let n = Number(prompt("Enter your number:")) , x , sum = 0, og = n , num = n ,count = 0;

    // while (num != 0) {
    //     num = Math.floor(num / 10)
    //     count++  
    // }
    // do{
    //     x = n % 10; 
    //     sum += x ** count 
    //     n = Math.floor(n / 10);

    // }while (n != 0) 

    //     if (sum == og) {
    //         console.log("Armestrong number"); 
    //     }else{
    //     console.log(" not a Armestrong  number"); 

    //     }

    // Output

    // n = 153
    // => Armestrong number
    
// 4 =>  Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.

    // let n = Number(prompt("Enter your number:")) , x , str = "" , og = n;

    // while (n != 0) {
    //     x = n % 10; 
    //     str += x   
    //     n = Math.floor(n / 10);

    // }
    //     if (str == og) {
    //         console.log("Palindrome number"); 
    //     }else{
    //     console.log(" not a Palindrome number"); 

    //     }

    // Output

    // n = 141
    // =>palinndrome 
    
// 5 Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop.

    // let n = Number(prompt("Enter your number:")); 
    // let x = 0 ; 
    // let y = 1 ; 
    // let z ;

    // let i = 1
    // while (i <= n) {
    //     z =  x + y;
    //     x = y 
    //     y = z 
    //     i++;
    //     console.log(x);
    // }

    // Output

    // n => 6
    // 1,1,2,3,5,8

// 6 => Write a JAVASCRIPT Program to add all the integers between 0 and 30 and display the total using do while loop

    // let i = 0 ,sum = 0 ;
    // do{
    //     sum += i
    //     i++
    // }while (i <= 30) 

    // console.log("The sum of all integers from 0 to 30 is: " + sum);

    // Output

    // The sum of all integers from 0 to 30 is: 465
    
// 7 => Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop.

    // let i = 1;

    // do {
    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log("FizzBuzz");
    // } else if (i % 3 === 0) {
    //     console.log("Fizz");
    // } else if (i % 5 === 0) {
    //     console.log("Buzz");
    // } else {
    //     console.log(i);
    // }
    // i++;
    // } while (i <= 100);

    // Output

// 1
// 2
// fizz
// 4
// fizz
// fizz
// 7
// 8


// 8 => Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop. There will be no hyphen(-) at starting and ending position.

    // let str=""

    // for(let i = 1 ; i <= 10 ; i++){
    //     str = str + i
    //     if(i<10)
    //     str += "-"
    // }
    // console.log(str);

    // Output

    // 1-2-3-4-5-6-7-8-9-10

//  9 => Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.

    //  let str="" ,sum = 0

    // for(let i = 1 ; i <= 10 ; i++){
    //     str += i ** 2
    //     sum += i**2
    //     if(i<10)
    //     str += " + "

    // }
    // console.log(str + " = " , sum);

    // Output

    // 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385



// 10 => pattern using nested loop.

/*
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/

// let i,j;
// let str;

// for (i=5 ; i >= 1 ; i--) 
//         {
//             str = "";
//             for (j=5 ; j >= i ; j--){
//                 str = str + j + " ";
//             }
//             console.log(str);
//         }

    // Output

/*
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/

// 11 => pattern using nested loop.

/*
    1
    2 3 
    4 5 6
    7 8 9 10
    11 12 13 14 15
    
*/

    // let i,j;
    // let str;
    // count = 1 ;

    // for(i =1 ; i <= 5 ; i++){
    //     str = "";
    //     for(j = 1 ; j <=i ; j++){
    //         str = str + count + "";
    //         count++
    //     }
    //     console.log(str);
    // }

    // Output

    // 1
    // 2 3 
    // 4 5 6
    // 7 8 9 10
    // 11 12 13 14 15
 
