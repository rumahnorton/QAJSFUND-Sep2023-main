let quote = ["I", "am", "your", "friend"];
console.log(quote)

console.log(quote[2]);

quote.pop;

quote.push("father");

console.log(quote);

quote.unshift("Luke");

console.log(quote);

let erroneousWord = ["Luke"];

let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});

let lukeIsAt;
if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    quote[lukeIsAt] = "No";}

    console.log(quote);