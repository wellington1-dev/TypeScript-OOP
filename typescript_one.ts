first Exercise
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
//the var myString is a string, we are declaring the value as a number. To solve this, we have 
//to declare the second value as a string as well or declare the myString as a var tof type number.
// I just declared the result 9 as a string with quotation.

Second exercise
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello('9'));
// same problem as before: we declared the sayHello as a function.

Third exercise

function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", '', "Jones"));
// I can declare as empty with quotation

fourth 

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//It was a mistyped error at bets on "jay "object. 
// if you try to run it, you'll see this mistyping error via browser as undefinded. 


fifth
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("wellington", "silva");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja(
    "Alan", "Turing")

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

//so, we are declaring something inside of the const turing whitch is a 2 attributes. a new ninja  with new attributes
//in this cae, I changed the const shane to const shane = new Ninja() and inserted the attributes inside of the
//function with the constructor has the atributes like( firstName and lastName).

sixth

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x ** x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
   console.log(math)


//This math neeed to be declared and use curly braquests as a list
//var math = (x, y) => let sum = x + y;
   //let product = x * y;
   //let difference = Math.abs(x-y);
   //return [sum, product, difference];



seventh
class Elephant {
   constructor(public age: number){}
    birthday = () => {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
//an arrow function was added after ().



