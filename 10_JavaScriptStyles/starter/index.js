// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

console.log(blueParagraph.style.color);
console.log(getComputedStyle(blueParagraph).color);

function blueToRed() {}
blueParagraph.style.color = "red"; 
console.log(blueParagraph.style.color);
console.log(getComputedStyle(blueParagraph).color);

function greenToPink() {}

function tnrToArial() {}