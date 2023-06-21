// This file will contain description about variable

//  we use variable to store data temporarily in computer memory

let name;
// by default we define a variable then there value is undefined

console.log(name);


// we have intialized the variable with a value
name="Sumit";
console.log(name)

// The Rules for  declare a variable

// cannot be a reserved word
// name should be meaningful
// variable cannot start with number
//they cannot contain a space or hyphen
// javascript variables are case-sensitive

let firstname, lastname;
firstname="Sumit";
lastname='sarker';

// Constant variable

const interestRate=9.8;
// you must assign a value when you are defining a const variable
//  you cannot further reassign any value in const variable



// Two types of data types in javascript
// 1.primitives/ value types
// 2.Reference Types

// Now we going to discuss about primitives data types

let Name="Sumit";  // string Literal
let age=23 ; // number literal
let isApproved= true;  // Boolean literal
let Firstname=undefined; // undefined
let selectedColor=null;// when we want to clear the value of variable

// Dynamic Type

let typeofVar ="Sumit" // now the variable type is String
typeofVar= 32 // the variable type has changed into Number

// Reference Types -->
// -> Object
//-> Array
// -> Function


// Objects --> an object is multiple related properties and method


// Object declearation
const person={
    name:'Sumit',
    age:30
}


// Dot notation to access any property of object
person.name="sarker";

// Bracket Notation
person['name']='Ratul';

console.log(person)

// array is data structure used to represent a list of item

let selectedColors=['red','blue','green'];
selectedColors[2]='black';
selectedColors[3]=true;
console.log(selectedColors)

// In javascript array works as an object
// and it can inherit method 

console.log(selectedColors.length)


// Reference Type -> Function

// Performing a task

function greet(name){
 console.log(`Hello ${name}`)
}
greet("Sumit")

// Types of functions

// Function that calculating some value
function square(number){
    return number*number;
}
let sqr=square(2);
console.log(sqr);















