"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, artistAlbum) {
    return { artistName, artistAlbum }; // Function without No Of Trackes
}
let album1 = make_album("Atif Aslam", "PSL");
let album2 = make_album("Ali Zafar", "IPL");
let album3 = make_album("Mohsin", "CPL");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistName, artistAlbum, NumberofTrackes) {
    return { artistName, artistAlbum, NumberofTrackes }; // Function with No Of Trackes
}
let album4 = make_album2("Atif Aslam", "PSL", 36);
let album5 = make_album2("Ali Zafar", "IPL", 55);
let album6 = make_album2("Mohsin", "CPL", 13);
console.log(album4);
console.log(album5);
console.log(album6);
