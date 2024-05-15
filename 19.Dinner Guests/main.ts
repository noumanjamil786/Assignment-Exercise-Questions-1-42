// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

let GuestList : string[] = ["ALI","khalil","Danial"]

let message : string = "Unfortunately!! The New Dinner table was not arrived So we can Invite Only two People for Dinner";
console.log(message);
 
GuestList.unshift("Nouman","Aneeq");
console.log(`Updated Guest List: ${GuestList}`);

while( GuestList.length > 2){
    let RemovedGuest : string | undefined = GuestList.pop();
    if ( RemovedGuest != undefined)
      console.log(`Sorry ${RemovedGuest} we Cant Invite for Dinner`);
    }
GuestList.forEach(Guest =>{
    console.log(`${Guest} You Both are Still Invited`);
})