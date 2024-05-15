"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
//  Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
let sizeofShirts = ["Small", "meduim", "large"];
let shirt1 = "This Shirt is For Casual Wearnings";
let shirt2 = "This Shirt is For Party Wearnings";
let shirt3 = "This Shirt is For Office Wearnings";
function make_shirt() {
    let simpleFunction = `This is a ${sizeofShirts[0]} Shirt, ${shirt1}`;
    console.log(simpleFunction);
    return simpleFunction;
}
// let response = make_shirt()
// console.log(response);
