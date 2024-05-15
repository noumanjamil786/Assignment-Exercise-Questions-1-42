// // City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

import { listenerCount } from "process";

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


let lahore : string = "Lahore , Pakistan";
let Istanbul : string = "Istanbul , Turkey";
let Dehli : string = "Dehli , India";

function city_country(city:string){
    console.log(city);
}
city_country(lahore);
city_country(Istanbul);
city_country(Dehli);
