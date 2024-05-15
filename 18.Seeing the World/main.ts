// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order

let placeVisit : string[] = ["Pakistan","London","Dubai","Qatar","Paris"];

// • Print your array in its original order.

console.log("Original Orders:", placeVisit);

// • Print your array in alphabetical order without modifying the actual list.

console.log("Alphabatical Orders:" ,placeVisit.slice().sort());

// • Show that your array is still in its original order by printing it.

console.log("Original Orders:", placeVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse Alphabatical Orders:" ,placeVisit.slice().sort().reverse());

// • Show that your array is still in its original order by printing it again.

console.log("Original Orders:", placeVisit);

// • Reverse the order of your list. Print the array to show that its order has changed.


console.log("Reverse Order Changed");
placeVisit.reverse();
console.log(placeVisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Original Orders:", placeVisit.sort());
console.log(placeVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("Original Orders:", placeVisit.sort());
console.log(placeVisit);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Reverse Alphabetical Order Changed:",placeVisit.sort().reverse());
console.log(placeVisit);
