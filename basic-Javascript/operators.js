

// Basic Operators of JavaScripts
let x=10;
let y=5;
let number=20;

// Arithmetic opreators

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)



// Incriment operator

console.log(number++)
console.log(number)

// Decriment operator

number--;
console.log(number)
--number;
console.log(number)

// Assignment oprerator
let a= 10;

x=  x+5;
x += 5;

x= x*3;
x *= 3;


// Comparison Operators

x=1;
console.log(x>0);
// The result will be comparison operators is boolean value

console.log(x === 1);
console.log(x !==1);

//Strict Equality (Type+Value)

console.log(1===1) // True
console.log('1'=== 1) // False

// Loose Equality (check values only)

console.log(1== 1) // True
console.log('1'== 1) // True
console.log(true == 1) // true


// Ternary operator

// If a customers has more than 100 points.
// they are a 'gold' customer, otherwise
// they are silver customer

let points =11;
let type = points>100? 'gold':'silver';
console.log(type)

//  Logical operations

//       logical And --> &&
//      Logical Or--> ||
//      Logical Not --> !

console.log(true && true);
console.log(true && false);

let highIncome=true;
let goodCreditScore= true;

// logical And --> &&
let eligibleForLoan=highIncome && goodCreditScore;

// Logical OR--> || 
highIncome=false;

let waitingForLoan= highIncome || goodCreditScore;


//Logical Not --> !
let applicationRefused=!eligibleForLoan;

//    Truthy or Falsly

// Falsy value ->


// Excerise -> variable swap

let color1='red';
let color2='blue'
let change=color1;
color1=color2;
color2=change;
console.log(color1, color2)


















