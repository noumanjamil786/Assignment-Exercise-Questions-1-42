// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message

import { log } from "console";

let sizeofShirts : string[] = ["Medium","Large"]

let defaultMessage : string = "I love Typescript";

let mediumSize : string = (`Size Of Shirt is : ${sizeofShirts[0]}, ${defaultMessage}`);

let largeSize : string = (`Size Of Shirt is : ${sizeofShirts[1]}, ${defaultMessage}`);

let smallsize : String = ("This is a Small size Of Shirt and I love To wear in Parties");

let extralargesize : String = ("This is a Extra Large size Of Shirt and I love To wear in Office");

function make_shirt(){
    let simplefunction = (mediumSize)
    console.log(simplefunction);
    return simplefunction  
}

let responce = make_shirt()
console.log(responce);
