/*
// Arithmetic Operators
let a = 10;
let b = 5;  
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus 
let h = a ** b; // Exponentiation
console.log("Addition: " + c);
console.log("Subtraction: " + d);
console.log("Multiplication: " + e);
console.log("Division: " + f);
console.log("Modulus: " + g);
console.log("Exponentiation: " + h);   
*/



/*
// case sensitive
let NAME = "Alice";
let name = "John";
let Name = "Doe";
console.log(name);
console.log(Name);
console.log(NAME);
*/



//Increment and Decrement Operators
// Post-increment
// let num = 5;
// num++; // Increment
// console.log(num);


// let Num = 10;
// Num--;  // Decrement
// console.log(Num);

// // Pre-increment
// let preNum = 5;
// ++preNum; // Increment
// console.log(preNum);

// //Pre-decrement
// let PreNum = 10;
// --PreNum;  // Decrement
// console.log(PreNum);



/*
let NUM = 45;
// NUM++;
//  console.log(++NUM);
//  console.log(NUM++);
//  console.log(NUM++);
//  console.log(NUM);

console.log(--NUM);
console.log(NUM--);
console.log(NUM);       */



/*
//Assignment Operators
let num = 10;
num +=2;       //num = num + 2 hua h += se.
console.log(num);
num -=2;        //num = num - 2 hua h -= se.
console.log(num);
num *=2;     //num = num * 2 hua h *= se.
console.log(num); 
num /=2;     //num = num / 2 hua h /= se.   
console.log(num);
num %=8;     //num = num % 2 hua h %= se.
console.log(num);
num **=2;    //num = num ** 2 hua h **= se. 
console.log(num);                   */





//Comparison Operators<---       Ye operators compare two values and return a boolean value (true or false) based on the comparison result.

// const num1 = 3;
// const num2 = 6;
// console.log(3 > 6); // false
// console.log(3 < 6); // true
// console.log(3 >= 6); // false
// console.log(3 <= 6); // true
// console.log(3 == 6); // false
// console.log(3 != 6); // true    != ye symbol ka matlab hain not equal to.



// //loose equality operator (==) compares values for equality.
// console.log("5" == 5); // true.

// //strict equality operator (===) compares values and types for equality.
// console.log("5" === 5); // false.      ye strict equality operator h jo value aur type dono ko compare karta h. 5 string h aur 5 number h isliye false aaya.




//Logical Operators.
/*&& (AND) operator returns true if both operands are true, otherwise it returns false.
|| (OR) operator returns true if at least one of the operands is true, otherwise it returns false.
! (NOT) operator negates the boolean value of the operand. If the operand is true, it returns false, and if the operand is false, it returns true.  */

// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true); // false
/*
const age = 20;
const hasId = true;

const canEnterClub = age >= 18 && hasId === true; // true
console.log(canEnterClub); // true  */

// console.log(!true); // false
// console.log(!false); // true
// console.log(!56); // false
// console.log(!0); // true














//Conditional (Ternary) Operator
// The conditional (ternary) operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:    


//  if (true) {
//     console.log("In True block");
// } else {
//     console.log("In False block");
// }


/*
const isLoggedIn = true;

if (isLoggedIn) {
    console.log("You can like, comment");
}
else{
    console.log("please first login.");
}       */


// let temp = 40

// if (temp >= 30) {
//     console.log("Ac chala do");
// }
// else {
//     console.log("Ac mat chalao");
// }




//Nested if-else

// let age = 25;
// let hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         console.log("Entry allowed");
//     } else {
//         console.log("ID required");
//     }
// } else {
//     console.log("Not eligible");
// }


// const isLoggedIn = true;
// const isSubsCribed = false;

// if (isLoggedIn) {
//     if (isSubsCribed) {
//         console.log("You can access premium content.");
//     } else {
//         console.log("You dont have any premium plan to access this Content");
//     }
// } else {
//     console.log("Please login");
// }





// Switch case statement
// The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches the value of that expression against multiple case clauses. If a match is found, the corresponding block of code is executed. The syntax is as follows:
// this is syntax.
/*
switch (expression) {
    case value1:
        // Code to be executed if expression === value1
        break;
    case value2:
        // Code to be executed if expression === value2
        break;
    // Add more cases as needed
    default:
        // Code to be executed if no case matches
}       */



const day = "Thu"

switch (day) {
    case "Mon":
        console.log("1st day of the week");
        break;
    case "Tue":
        console.log("2nd day of the week");
        break;
    case "Wed":
        console.log("3rd day of the week");
        break;
    case "Thu":
        console.log("4th day of the week");
        break;
    case "Fri":
        console.log("5th day of the week");
        break;
    case "Sat":
        console.log("6th day of the week");
        break;
    case "Sun":
        console.log("7th day of the week");
        break;
    default:
        console.log("Invalid day");
}