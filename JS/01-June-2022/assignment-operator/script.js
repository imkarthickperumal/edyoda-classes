// = =>Assignment operator

// Declaration should be only once, wheres value can be assigned n no of times
// Only one value can be saved in a variable ar a time

var price;
price = 1000;
price = price + 1;
price = price + 10;
price = price + 20;

// price = price * 2; // 1012 * 2 =>2024,1012*1012=>1024144
// price = price + price

price = price / 2;

price = price - 1;
price = price - 10;
// console.log("Procuct price is : ", price);

var productPrice = 999;
// ++ =>Increment Operator
// ProductPrice = ProductPrice + 1;
productPrice++;
// productPrice = 1000;
console.log("New Product price : ", productPrice);

//productPrice = productPrice + 10;
//productPrice +=10;
productPrice += 50;
console.log("Product price after +=operator : ", productPrice);


// productPrice = 1050;

productPrice--;
console.log("Product price after -- operator : ", productPrice);

productPrice -=10;
console.log("Product Price after -=operator : ", productPrice);

// productPrice = 1039;
// productPrice = productPrice*1;
// productPrice**;

// productPrice = productPrice*20;
productPrice*=20;
console.log("Product price after *=operator : ", productPrice);

// productPrice;
// productPrice = productPrice / 5;
productPrice /=5;
console.log("Product price after /=operator : ", productPrice);

//productPrice = 4156;
productPrice = 10;
// productPrice = productPrice % 3;
productPrice %=3;
console.log("Product price after %=operator : ",productPrice);


var assAdd = 10;
assAdd +=10;
console.log("first += operator : ",assAdd);

var assSub = 10;
assSub -=8;
console.log("first -= operator : ",assSub);

var assMul = 40;
assMul *= 90;
console.log("first *=operator : ", assMul);

var assDiv = 10;
assDiv /=2;
console.log("first /=operator : ",assDiv);

var assMud = 100;
assMud %=22;
console.log("first %=operator : ",assMud);

discount = 10;
// Hoisting =>It is a concept in JS which moves variable declarations to the top

