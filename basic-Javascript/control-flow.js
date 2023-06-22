

//  This javascript file is about control- flow 

// In javascript we have two types of conditional statement
// if...else and switch.... case.

//Hour
// if hour is between 6am and 12pm :Good morning!
// if it is betweeen 12pm and 6pm : Good afternoon!
// Otherwrise : Good evening

// If...else statement

let hour =17;
if(hour>=6 && hour<12){
    console.log("Good Morning");
}
else if(hour>= 12 && hour<18){
    console.log("Good Afternoon");

}
else{
    console.log('Good Evening')
}

// switch... Case

let role='admin'; // admin, moderator, guest

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    
    case 'admin':
        console.log('Admin user');
        break;

    default:
        console.log('Unknown User');
}

if(role==='guest') console.log('Guest User');
else if( role=== 'admin') console.log('Admin User');
else console.log('Unknown User')

// // Loops in javascript:
//  ->For Loop
//  -> While Loop
//  -> Do while Loop
//  -> For in Loop
//  -> For of Loop

for(let i=5;i>=1;--i){
   if(i%2!==0){
     console.log(` ${i} is Odd number`)
   }
}

// WHile...Loop 

let i=0;
while(i<=10){
    if(i%2 ==0){
        console.log(`${i} is a Even number`)
    }
    i++
}

// Do...While Loop

// let i=0;

do{
    if(i%2 ==0){
        console.log(`${i} is a Even number`)
    }
    i++
}while(i<=10)

// // infinte loop
// let _x=0;
// while(_x<5){
//     console.log("hello world")
// }

// for-in --> show the index number of the element
const person={
    name:'Sumit',
    age:23
};

for(let count in person){
    console.log(count, person[count])
}
// output will be --> name Sumit and age 30

const colors=['red','green','blue']
for(let index in colors){
    console.log(index, colors[index])
}

// for..of loops --> Show the value of the index

for(let element of colors){
    console.log(element);
}

// Break and Continue

let a=0;
while(a<=10){
    //if(a==3)break;
    if(i%2===0){
        i++;
        continue;
    }
    console.log(a);
    a++;
}

// excerice-1

function max(num1,num2){
   return (num1,num2)? num1:num2;
}
let maxvalue=max(29,20)
max(10,2)
console.log(maxvalue)

// 
function isLandscape(width, height){
    return (width>height);
}

console.log(isLandscape(25,21))

// Fizzbuzz algo

function fizzbuzz(input){
    if(typeof input !== 'number'){
        return 'Not a number';
    }
    if(input %3 ===0){
        return "Fizz";
    }
    if(input %5 ===0){
        return "Buzz";
    }
    if((input %3 ===0) && (input %5 ===0)){
        return 'Fizzbuzz';
    }

    return input;

}

const output=fizzbuzz(15)
console.log(output)

// excerice ---> Checkspeed

const speedlimit=70;
const kmper=5;

function checkspeed(speed){
    if(speed<speedlimit+kmper){
        console.log('Ok')
    }
    else{
        const points=Math.floor((speed-speedlimit) / kmper);
        if(points>=12){
            console.log("Licence Cancel");
        } 
        else console.log('Points',points)
    }
    
}

checkspeed(100)

