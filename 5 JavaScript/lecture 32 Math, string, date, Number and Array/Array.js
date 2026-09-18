// // Array ek ordered collection hain and ye ek non-primitive data type hain. Array me hum multiple values ko ek variable me store kar sakte hain. Array me hum kisi bhi type ke data ko store kar sakte hain jaise ki string, number, boolean, object, array etc.






// let pro1Name = "tshirt";
// let pro1Price = 500;

// // console.log(pro1Name, pro1Price);

// let pro2Name = "lower"
// let pro2Price = 1000;

// let pro3Name = "cap"
// let pro3Price = 2000;


// // let products =["tshirt", "lower", "cap","shoes"];

// // console.log(products [2], products[3]);

// // console.log(products.length);

// // console.log(products[products.length - 1]);
// // console.log(products[lastIndex]);
// // console.log(products.at(-4));

// // for (let i = 0; i < products.length; i++) {
// // console.log(i);
// // }



// //Nested Array . 
// // Array ke andar array ko nested array kehte hain. Nested array me hum ek array ke andar multiple array ko store kar sakte hain.jese ki hum ek array ke andar multiple products ke details ko store kar sakte hain. 


// let products = [["tshirt", 500], ["lower", 1000], ["cap", 2000], ["shoes", 3000]];

// // let firstProduct = products[0];
// // console.log(firstProduct[0]);

// // console.log(products[0][0]);
// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i][0]);                // ye kese bhi product ko define krne ke  liye Wrong tarika hai eska shi tarika lecture 33 mai hoga.
//     console.log(products[i][0] , products[i][1]);   
// }







// // After Array class.
// function totalMarks(mathMarks, scienceMarks, sanskritMarks){
//     return mathMarks + scienceMarks + sanskritMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarka, sanskritMarks) {
//     let total = totalMarks(mathMarks, scienceMarka, sanskritMarks);
//     let percentage = (total / 300) * 100;
//     console.log(`${studentName} percentage : ${percentage}`);
//     return percentage;
// }

// let students = [
//     ["Alok", 46, 56, 23],
//     ["Addi", 24, 24, 42],
//     ["Karan", 54, 23, 65],
//     ["Anu", 54, 52, 23]
// ];

// for (let i = 0; i < students.length; i++) {
//     calPercentage(students[i][0], students[i][1], students[i][2], students[i][3]);
// }




let products = ["tshirt","lower","cap", "shoes"]

products.push("hello") // last mai add krta h    
products.pop() // end se hta deta h
products.unshift("hello")  // start mai add krta hai.
products.shift()  // start se delet karta  hai
console.log(products);
