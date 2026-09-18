// functions
// Function ek reusable block of code hota hai jo kisi specific task ko perform karta hai.
//Ek baar function bana do, phir usse multiple times call kar sakte ho.




// let AlokMarks = 34 + 56 + 64;
// let AddikMarks = 54 + 43 + 23;
// let AnuMarks = 74 + 57 + 65;
// let KaranMarks = 34 + 55 + 25;

// console.log("alokMarks:", alokMarks);



// /*Function syntex */
// // function is keyword and totalMarks is function name. curly bracket ko function decleration kha jata hai.
// function totalMarks() {
//   console.log("hi");
// }
// totalMarks();        // ye  function ko call kiya hai. tbjaker "hi" print hua hai
// totalMarks();
// totalMarks(); 


// function totalMarks(studentName, mathMarks, scienceMark, sanskritMark) {
//   console.log(`${studentName} total marks :`, mathMarks + scienceMark + sanskritMark);
// }


// totalMarks("Aloak", 34, 56, 64);
// totalMarks("Addi", 54, 43, 23);
// totalMarks("Anu", 74, 57, 65);
// totalMarks("Karan", 34, 55, 25);


// function greetingMsg(userName){
//   console.log(`Hii, ${userName}`);
// }
// greetingMsg("Deepak");
// greetingMsg("Raghav");
// greetingMsg("Coder");
// greetingMsg("Codex");



// function greetingMsg(userName,greetings){
//console.log(`${greetings}, ${userName}`);
//console.log(greetings + "" + userName);
// }
// greetingMsg("Deepak","Hii");
// greetingMsg("Raghav","HELLO");
// greetingMsg("Coder","NAMSTE");
// greetingMsg("Codex","Kemcho");



/*
// CALCULATOR Programe.
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
      break;
    case "-":
      console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
    case "*":
      console.log(`${num1} ${operator} ${num2} =`, num1 * num2);
      break;
    case "/":
      console.log(`${num1} ${operator} ${num2}=`, num1 / num2);
      break;
    case "%":
      console.log(`${num1} ${operator} ${num2}=`, num1 % num2);
      break;
  }
}
calculator(101, 20, "+")
*/





//Default PARAMETERS.

// function greetingMsg(userName = "Guest", greetings = "Hii") {
//   console.log(`${greetings}, ${userName}`);
// }
// greetingMsg("Deepak", "Hii");
// greetingMsg("Raghav", "HELLO");
// greetingMsg("Coder");
// greetingMsg("Codex");
// greetingMsg(); // ye default parameter ka use kiya hai.








// Return keyword.


function totalMarks( mathMarks, scienceMark, sanskritMark) {
  // console.log(`total marks :`, mathMarks + scienceMark + sanskritMark);
  return mathMarks + scienceMark + sanskritMark;
}

function calPercentage(studentName, mathMarks, scieenceMark, sanskritMark) {
  let total = totalMarks(mathMarks, scieenceMark, sanskritMark);
  let percentage = (total / 300) * 100;
  console.log(`${studentName} percentage :`, percentage);
}

calPercentage("Alok", 34, 56, 64);
