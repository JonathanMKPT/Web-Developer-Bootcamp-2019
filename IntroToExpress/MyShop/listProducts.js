var faker = require('faker');

console.log("Welcome to the Bullshit side of Etsy!, Remember you asked for this...\n");

for(var i = 0; i < 10; i++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}

