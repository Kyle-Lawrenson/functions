// ACTIVITY 01

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }else{
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// ACTIVITY 02

// let orderCount = 0;
 
// const takeOrder = (topping1, topping2, topping3) => {
//     console.log(`Pizza with ${topping1} + ${topping2} + ${topping3}`);
//     orderCount++;
// }
 
// takeOrder("Spicy Beef", "Pepperoni", "Chicken");

// ACTIVITY 03

let pin = 1234
let balance = 100
let withdraw = 10

if (pin == 1234 && balance > withdraw) {
const takeAway = (withdraw, balance) => {
    return balance - withdraw 
}

console.log(takeAway(withdraw, balance))
}

else if (pin != 1234)
    console.log ("Incorrect PIN")

else if (withdraw > balance)
    console.log("Insufficient funds")



