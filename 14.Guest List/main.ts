// Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guest_List : String[] = ["Usman","Ali","Khalil","Danial","Aneeq"]

for(let i =0 ; i < guest_List.length ; i++){
    console.log(`Hello ${guest_List[i]} ,"Would you like to dinner with me?"`);
}
guest_List.forEach(guest_List =>{
    console.log(`Hello ${guest_List},"Would you like to dinner with me?"`);
})

