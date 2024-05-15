"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name
let Names = ["Nouman", "ALi", "Khalil", "Danial"];
Names.forEach(Names => {
    console.log(`Hello ${Names},"would you like to learn some typescript today?`);
});
for (let i = 0; i > Names.length; i++) {
    console.log(`Hello ${Names[i]},"would you like to learn some typescript today?`);
}
