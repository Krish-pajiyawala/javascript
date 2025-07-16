// OOPS

// class Test{
//     a = 100;
//     b = "Hello";

//     SayHello(){
//     return("Hello i am Krish");
// }
// }

// let obj = new Test();
// console.log(obj.a);
// console.log(obj.SayHello());


// CONSTRUCTOR 

// class Test{
//     constructor(){
//         console.log("constructer called");
//     }
// }
// let obj = new Test()

// class Add{
//     constructor(a,b){
//         console.log(a+b);
//     }
// }
// let x = new Add (5,15)

// class multi {
//     constructor(a,b){
//         console.log(a*b)
//     }
// }
// let y = new multi (5,15)

// => INHERITANCE

// class person{
//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = this.address;
// }
//     getDetails(){
//         console.log(`${this.name} age is ${this.age} year old . he is from${this.address}`);
//         }
//     }
//     class student extends person{
//         constructor(name,age,address){
//             super(name,age,address);
//             console.log("child class called");
//             }
// }

//     let obj = new student("Krish",20,"surat")

//     obj.getDetails();
//     console.log(obj.name)
//     console.log(obj.age)
//     console.log(obj.address)

            // POLYMOREPHISM 

//  EX-1

// class Fruit{
//     bark(){
//         console.log("fruit bark");
//     }
// }

// class Apple extends Fruit{
//     bark(){
//         console.log("apple is here");
//         }
// }
// class Orange extends Fruit{
//     bark(){
//         console.log("orange is here");
//         }
// }

// let apple = new Apple();
// apple.bark()

// let orange = new Orange();
// orange.bark()

// EX-2

// class A{
//     area(x,y){
//         console.log(x*y)
//     }
// }

// class B extends A{
//     area(x,y){
//         console.log(x*y*2)
//     }
// }
// let obj = new B();
// obj.area(5,6)

            // ABSTRATION

// class person{
//     name = "KRISH";
//     age = 25

//     set Data (name,age){
//         {
//             return`I am ${this.name} My age is ${this.age}`
//         }
// }
// }
