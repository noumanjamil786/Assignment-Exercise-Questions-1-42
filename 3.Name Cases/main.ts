//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName : string = "Nouman";
console.log("lowercase:",PersonName.toLowerCase());
console.log("Uppercase:",PersonName.toUpperCase());
console.log("Titlecase:",PersonName.charAt(0)+PersonName.slice(1));