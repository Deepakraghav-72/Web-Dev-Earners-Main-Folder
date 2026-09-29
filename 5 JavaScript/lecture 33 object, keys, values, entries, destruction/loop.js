// For Of Loop
// For In Loop
// For Each Loop


/*
// For Of Loop
// example
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}*/



/*
// For in Loop
//example
let product = {
    name: "iPhone",
    price: 59999,
    brand: "Apple"
};

for (let key in product) {
    console.log(key);
}
// key and value dono dene ke liye.
for (let key in product) {
    console.log(key, product[key]);
}
    */






// For Each Loop
let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});