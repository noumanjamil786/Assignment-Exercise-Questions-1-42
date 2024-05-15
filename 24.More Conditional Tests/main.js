"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let Name = "Nouman";
Name = "Jamil";
// • Tests for equality and inequality with strings
console.log("String tests involving equality and inequality");
console.log("Test For Equality:");
console.log(Name == "Nouman"); // True
console.log("\nTest For Inequality:");
console.log(Name != "Nouman"); // fasle
// • Tests using the lower case function
console.log("\nTesting Using Lower Case function:");
console.log("Test For Equality:");
console.log(Name.toLowerCase() == "Nouman"); // True
console.log("\nTest For Inequality:");
console.log(Name.toLowerCase() != "Nouman"); // fasle
// • Numerical tests involving equality and inequality, greater than and less than, 
let age = 30;
age = 24;
console.log("\nNumerical tests involving equality and inequality:");
console.log("Test For Equality:");
console.log(age == 30); // True
console.log("\nTest For Inequality:");
console.log(age != 30); // fasle
console.log("\nGreater than and Less than:");
console.log("Test For Greater Then:");
console.log(age > 30); // True
console.log("\nTest For Less Then:");
console.log(age < 30); // fasle
console.log("\nNumerical tests involving greater than or equal to, and less than or equal to:");
console.log("Test For Greater Then Equal TO:");
console.log(age >= 30); // True
console.log("\nTest For Less Then Equal TO:");
console.log(age <= 30); // fasle
// • Tests using "and" and "or" operator
console.log("\nTests using And and Or operators:");
console.log("Test For AND Operator:");
console.log(Name == "Nouman" && Name == "Nouman");
console.log("\nTest For Or Operator:");
console.log(Name == "Nouman" || Name == "Jamil");
// • Test whether an item is in a array 
let PersonName = ["Nouman", "Abdullah", "Raza"];
console.log("\nTest whether an item is in a array:");
console.log("is Nouman in array?"); // true
console.log(PersonName.includes("Nouman"));
// • Test whether an item is not in a array
console.log("\nTest whether an item is not in a array:");
console.log("is Ahmed in array?"); // false
console.log(PersonName.includes("Ahmed"));
