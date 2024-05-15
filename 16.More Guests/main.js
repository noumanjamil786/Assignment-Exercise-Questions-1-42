"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("We have Found a bigger dinner table");
let guest_List = ["Aneeq", "Usman", "Danial", "Ali",];
guest_List.unshift("khizer");
guest_List.splice(Math.floor(guest_List.length / 2), 0, "Nouman");
guest_List.push("Khizer");
console.log(guest_List);
guest_List.forEach(guest => {
    console.log(`Hello ${guest} You All are invited for dinner`);
});
