let darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true
};

console.log(darthVader);

console.log(`Darthvaders allegiance is to the ${darthVader.allegiance}`);
console.log(`Darthvaders weapon is a ${darthVader.weapon}`);
console.log(`Is darthvader is a sith? ${darthVader.sith}`);
console.log(`Is darthvader a Jedi? ${darthVader.Jedi}`);

console.log(Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia'];
console.log(darthVader);
console.log(`Darth Vader's first child is called ${darthVader.childNames[0]}`);

for (let key in darthVader) {
    console.log(`Darth Vader's ${key} is ${darthVader[key]}`);
}


darthVader.allegiance = "The light side"
console.log(darthVader);
darthVader.sith = "False";
delete darthVader.children;
console.log(darthVader);

let{allegiance, weapon, sith, childNames} = darthVader;
console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);
darthVader = {}
console.log(darthVader);