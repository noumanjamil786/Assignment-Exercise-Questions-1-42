"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message
Object.defineProperty(exports, "__esModule", { value: true });
let sizeofShirts = ["Medium", "Large"];
let defaultMessage = "I love Typescript";
let mediumSize = (`Size Of Shirt is : ${sizeofShirts[0]}, ${defaultMessage}`);
let largeSize = (`Size Of Shirt is : ${sizeofShirts[1]}, ${defaultMessage}`);
let smallsize = ("This is a Small size Of Shirt and I love To wear in Parties");
let extralargesize = ("This is a Extra Large size Of Shirt and I love To wear in Office");
function make_shirt() {
    let simplefunction = (mediumSize);
    console.log(simplefunction);
    return simplefunction;
}
let responce = make_shirt();
console.log(responce);
