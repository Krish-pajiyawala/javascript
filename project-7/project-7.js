
//  1 => Create a School class and create a student and faculty method. The Student method gives the student name, email and contact number as  arguments and prints all details the same as faculty using class & object.

//     class School{
//         constructor(name,email,contact){
//             this.name = name;
//             this.email = email;
//             this.contact = contact;
//     }

//     student(){
//         console.log(`Student Name is ------${this.name}`);
//         console.log(`Student email is ------${this.email}`);
//         console.log(`Student contact is ------${this.contact}`);
//     }

//     faculty(){
//         console.log(`Faculty Name is ------${this.name}`);
//         console.log(`Faculty email is ------${this.email}`);
//         console.log(`Faculty contact is ------${this.contact}`);
//     }
// }

// let student = new School('Krish','krish@gmail.com','7990711676');
// student.student();
// let faculty = new School('Girish sir','girish@gmail.com','9510821039');
// faculty.faculty();

    // output

    // Student Name is ------Krish
    // Student email is ------krish@gmail.com
    // Student contact is ------7990711676
    // Faculty Name is ------Girish sir
    // Faculty email is ------girish@gmail.com
    // Faculty contact is ------9510821039

// 2 => ) Create a Person class with an argument name and age. create an Employee class through print out details of Person Class. 

// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     getdetail(){
//         console.log(`Person Name  --- ${this.name}`);
//         console.log(`Person Age  --- ${this.age}`);
//     }
// }
// class Employee extends Person{
//     constructor(name,age){
//        super(name,age)
//     }
// }

// let obj = new Employee("krish",20).getdetail()

    // output

    // Person Name  --- krish
    // Person Age  --- 20

// 3 =>  Employee class creates a constructor called print a simple message.

//  class Employee{
//     constructor(){
//         console.log("Constructor called..........");  
//     }
// }
// let obj = new Employee()

    //  output
    // Constructor called..........

// 4 => Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument.

// let radius = Number(prompt("Enter radius of the circle:"));
// let width = Number(prompt("Enter width of the rectangle:"));
// let height = Number(prompt("Enter height of the rectangle:"));

// if(radius < 0 || width < 0 || height < 0 ){
//     console.log("Plase Enter Positive Number");  
// }else{
// class Shape{
//     constructor(radius,width,height){
//         this.radius = radius
//         this.width = width
//         this.height = height
//     }
//     circleArea(){
//         let area = Math.PI * this.radius * this.radius
//         let fixnum = Math.round(area * 100)/100
//         console.log("Area of circle is" ,fixnum );
//     } 
//     rectangleArea(){
//         let area = this.width * this.height;
//         let fixnum = Math.round(area * 100)/100
//         console.log("Area of Rectangle is" , fixnum);
//     }
// }

// let obj = new Shape(radius, width, height).circleArea()
// let obj2 = new Shape(radius, width, height).rectangleArea()
// }

// output
// Enter radius of the circle:5
// Enter width of the rectangle:4
// Enter height of the rectangle:5

// Area of circle is 78.5
// Area of Rectangle is 20.0




        
