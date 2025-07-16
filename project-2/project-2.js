
// 1=> Electricity bill

    // => first 50 units, Rs: 1/unit 
    // => next 100 units, 2/unit 
    // => next 100 units, 3/ units 
    // => units above 250, 4/units 
    // => all bills above 150 units an additional surcharge of 20% of total bill amount is added. 

// let units = Number(prompt("Enter Electricity UNIT")) , total_amount;

// if(units < 0){
//     console.log("Plase Enter Valid Units");
// }
// else{
//     if(units <= 50){

//        total_amount = units * 1;
//     }
//     else if(units > 50 && units < 150){

//         total_amount = (50 * 1 ) + (units-50) * 2;
//     }
//     else if(units > 150 && units <= 250){

//         total_amount = (50 * 1 ) + (100 * 2) + (units-150) * 3;
//         total_amount += total_amount * 0.2
//     }
//     else{

//         total_amount = (50 * 1 ) + (100 * 2) + (100 * 3) + (units-250) * 4;
//         total_amount += total_amount * 0.2

//     }
//     console.log("Your Payable Amount of units" , units , "is" , total_amount , "₹")
// }

// 2 => Season using switch case

//     let month = parseInt(prompt("Enter the month number (1 to 12):"));

//   switch (true) {
//   case (month >= 1 && month <= 4):
//     console.log("Winter");
//     break;
//   case (month >= 5 && month <= 8):
//     console.log("Summer");
//     break;
//   case (month >= 9 && month <= 12):
//     console.log("Monsoon");
//     break;
//   default:
//     console.log("Invalid season");
// }

// 3 => Find Intrest using nested is.

//     let principal = Number(prompt("Enter the Principal Amount :")) , rate;
//     let years = Number(prompt("Enter the Number of Years :")) , interest;

// if (years> 3 && years <= 5){

//     rate = 0.3;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10) + "%");
//     console.log("Total Interest:", interest);
   
// }
//  else if (years> 5 && years <= 8){

//     rate = 0.5;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10) + "%");
//     console.log("Total Interest:", interest);
   
// }
//  else if (years> 8 && years <= 12){

//     rate = 0.12;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10 )+ "%");
//     console.log("Total Interest:", interest);
   
// }
//  else{

//     rate = 0.15;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10) + "%");
//     console.log("Total Interest:", interest);
//  }
   
// }


// 4 => Eligible for vor or not.

//     let age = Number(prompt("Enter your age:"));

// if (age <= 0) {

//     console.log("Invalid age entered");
    
// }
// else if(age >= 18){

//     console.log("You are eligible to vote");

// }else{

//     console.log("You are not eligible to vote");

// }

// 3 => BasicSalary , hra , da


// 5 => Casify Age of Group

//     let age = Number(prompt("Enter your age:"));

// if (age < 0) {
//   console.log("Invalid age.");
// }else{

// if (age >= 0 && age <= 12) {
//     console.log("You are a Child.");
// } 
// else if (age >= 13 && age <= 19) {
//     console.log("You are a Teenager.");
// } 
// else if (age >= 20 && age <= 59) {
//     console.log("You are an Adult.");
// } 
// else if (age >= 60) {
//     console.log("You are a LEGEND.");
// }
// }