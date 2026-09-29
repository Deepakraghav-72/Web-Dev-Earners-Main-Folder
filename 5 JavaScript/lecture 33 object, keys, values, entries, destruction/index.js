

let product1 = ["iphone", 59999]

console.log(product1[0]);
console.log(typeof product1);

let product2 = {
    name: "iphone",
    price: 59999,
    avgRating: 4.5,
    totalReviews: 75,
    discount: 10,
    productName: "iPhone",
    printProductName: function () {                 // Mehtod Type  , ye ek mehod likhen ka trika hota ha .
        // console.log("Iphone 18 pro max");
    },
    printDiscount() {
        console.log("10%"); //ya fir 
        // console.log(this.discount);
    }
}

// product1[0]
// console.log(product2);

let res =product2.printProductName()
// console.log(res);

console.log(Object.keys(product2));
console.log(Object.values(product2));








// Note:- kisi object ke ander likhe hue function ko method kha jata hai.

//  hm method ko es trike se bhi likh skte hain. 
// let Math = {
//     abs() {

//     },

//     cell() {

//     },

//     floor() {

//     }
// }














