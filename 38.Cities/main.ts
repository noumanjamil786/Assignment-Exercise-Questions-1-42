// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.

let Karachi : string = "Karachi is in Pakistan";
let istanbul : string = "Istanbul is in Turkey";
let paris : string = "Paris is in France";

function describe_city(cities : string,){
    console.log(cities);
    return cities 
}
console.log(Karachi);
