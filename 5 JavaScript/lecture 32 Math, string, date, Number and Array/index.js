// function convertToPositive(num) {
//     return num * -1;
// }
// let positiveNum = convertToPositive(-10);

// console.log(positiveNum);



// let positiveNum2 = Math.abs(-20);
// console.log(positiveNum2);







//THERE ARE MANY METHODS IN MATH OBJECT. BUT HERE ARE SOME OF THE MOST COMMONLY USED METHODS IN MATH OBJECT.
// console.log(Math.PI);

// console.log(Math.pow(2, 4));
// console.log(2 ** 3);

// console.log(Math.sqrt(16));

// console.log(Math.min(3,2,4,5,7.8,1));
// console.log(Math.max(4,5,6,7,10,23,44));





// that is how we can round a number to the nearest integer using Math.round() method.
// console.log(Math.round(4.5));
// console.log(Math.round(3.3));
// console.log(Math.round(3.7));



//this is a method that rounds a number up to the nearest integer using Math.ceil() method.
// ceil means round up to the nearest integer. and floor means round down to the nearest integer.
// console.log(Math.ceil(4.1));
// console.log(Math.floor(6.9));



//Random number is used to generate a random decimal number between 0 and 1.
// console.log(Math.random() + 1);
// let min = 1;
// let max = 6;
// let result = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(result);




// Number object is used to convert a string to a number. and it can also be used to check if a value is a number or not.

// console.log(Number.isFinite(Infinity));
// console.log("56");
// console.log(Number.parseInt("56"));


// let num1 = "45"; // backend
// let num2 = "75"; // backend se aayi hai.
// console.log(num1 + num2); //ye 2 string ko add kar dega. isliye humein parseInt() method ka use karna padega.
// console.log(parseInt(num1) + parseInt(num2)); //ye dono string ko number me convert kar dega aur fir add karega.




// let num=423.42244333
// console.log(num.toFixed(2)); // es toFixed method ka use karke hum number ko round off kar sakte hain. aur ye method hamesha string return karta hai. and hm decimal places ko specify kar sakte hain. jaise ki agar hum 2 decimal places chahte hain to hum num.toFixed(2) likhenge. aur ye method hamesha string return karega. and hum ise number me convert karne ke liye parseFloat() method ka use kar sakte hain.
// console.log(num.toPrecision(5)); // es toPrecision method ka use karke hum number ko round off kar sakte hain. aur ye method hamesha string return karta hai. and hm total digits ko specify kar sakte hain. jaise ki agar hum 3 total digits chahte hain to hum num.toPrecision(3) likhenge. aur ye method hamesha string return karega. and hum ise number me convert karne ke liye parseFloat() method ka use kar sakte hain.






//string object

// console.log("deepak raghav".toUpperCase()); // es toUpperCase method ka use karke hum string ko uppercase me convert kar sakte hain. aur ye method hamesha string return karta hai.



// let str = "Hello Dosto";
// let email = "example@gmail.com";
// console.log(str.includes("Dosto")); // es includes method ka use karke hum check kar sakte hain ki string me koi specific substring hai ya nahi. aur ye method hamesha boolean return karta hai. agar substring hai to true return karega aur agar substring nahi hai to false return karega.

// console.log(email.includes("@") && email.includes("."));



// let fileName = "image.pdf";
// console.log(fileName.endsWith(".png") || fileName.endsWith(".jpg") ||fileName.endsWith(".pdf")); // es endsWith method ka use karke hum check kar sakte hain ki string kisi specific substring se end ho rahi hai ya nahi. aur ye method hamesha boolean return karta hai. agar substring se end ho rahi hai to true return karega aur agar substring se end nahi ho rahi hai to false return karega.



// let greet  = "Hello Dosto, Hello bachoo";

// console.log(greet.replace("Hello","Hii"));   // es replace method ka use karke hum string me kisi specific substring ko replace kar sakte hain. aur ye method hamesha string return karta hai. agar substring mil jati hai to usse replace kar dega aur agar substring nahi milti hai to original string return karega. aur ye method sirf pehli occurrence ko replace karta hai. agar humein saari occurrences ko replace karna hai to humein regular expression ka use karna padega. jaise ki agar humein saari occurrences ko replace karna hai to hum greet.replace(/Hello/g,"Hii") likhenge. aur ye method hamesha string return karega.




// let greet1 = "Hello Dosto, Hello bachoo";

// console.log(greet1.replaceAll("Hello","Hii"));   // es replaceAll method ka use karke hum string me kisi specific substring ko replace kar sakte hain. aur ye method hamesha string return karta hai. agar substring mil jati hai to usse replace kar dega aur agar substring nahi milti hai to original string return karega. aur ye method saari occurrences ko replace karta hai. agar humein sirf pehli occurrence ko replace karna hai to humein replace() method ka use karna padega. jaise ki agar humein sirf pehli occurrence ko replace karna hai to hum greet.replace("Hello","Hii") likhenge. aur ye method hamesha string return karega.



//Date object
// console.log(Date.now()); // es Date.now() method ka use karke hum current timestamp ko get kar sakte hain. aur ye method hamesha number return karta hai. aur ye method hamesha UTC time zone me return karta hai. aur ye method hamesha milliseconds me return karta hai. aur ye method hamesha 1 January 1970 se lekar ab tak ke milliseconds ko return karta hai. aur ye method hamesha 13 digits ka number return karta hai. aur ye method hamesha positive number return karta hai. aur ye method hamesha integer return karta hai. aur ye method hamesha non-negative number return karta hai. aur ye method hamesha non-zero number return karta hai. aur ye method hamesha non-negative integer return karta hai. aur ye method hamesha non-zero integer return karta hai. aur ye method hamesha non-negative non-zero integer return karta hai. aur ye method hamesha non-negative non-zero integer return karta hai.


let date = new Date();
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());    // ye sabhi ka apna alg alg work hota hai. jaise ki getDay() method ka use karke hum current day ko get kar sakte hain. aur ye method hamesha number return karta hai. aur ye method hamesha 0 se lekar 6 tak ke number return karta hai. aur ye method hamesha Sunday se lekar Saturday tak ke number return karta hai. aur ye method hamesha 0 se lekar 6 tak ke number return karta hai. aur ye method hamesha Sunday se lekar Saturday tak ke number return karta hai. aur ye method hamesha 0 se lekar 6 tak ke number return karta hai. aur ye method hamesha Sunday se lekar Saturday tak ke number return karta hai. aur ye method hamesha 0 se lekar 6 tak ke number return karta hai. aur ye method hamesha Sunday se lekar Saturday tak ke number return karta hai. aur ye method hamesha 0 se lekar 6 tak ke number return karta hai. aur ye method hamesha Sunday se lekar Saturday tak ke number return karta hai.