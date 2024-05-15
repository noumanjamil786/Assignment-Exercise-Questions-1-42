"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
let GuestList = ["ALI", "khalil", "Danial"];
let message = "Unfortunately!! The New Dinner table was not arrived So we can Invite Only two People for Dinner";
console.log(message);
GuestList.unshift("Nouman", "Aneeq");
console.log(`Updated Guest List: ${GuestList}`);
while (GuestList.length > 2) {
    let RemovedGuest = GuestList.pop();
    if (RemovedGuest != undefined)
        console.log(`Sorry ${RemovedGuest} we Cant Invite for Dinner`);
}
GuestList.forEach(Guest => {
    console.log(`${Guest} You Both are Still Invited`);
});
GuestList.splice(0, GuestList.length);
console.log(`Empty Guest list: ${GuestList}`);
