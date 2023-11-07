let hanSolo = new Map([
    ["vehicle", "Millenium Falcon"],
    ["bff", "Chewbacca"],
    ["sweetheart", "Leia"]
]);

console.log(hanSolo.size);
console.log(`Han Solo's ship is called ${hanSolo.get("vehicle")}`);
console.log(`Han Solo's has a sweetheart? ${hanSolo.has("sweetheart")}`);
console.log(`Han Solo is a Jedi? ${hanSolo.has('Jedi')}`);

hanSolo.set("son","Ben");
console.log(`Han Solo's son is called ${hanSolo.get("son")}`);

for (let [key, value] of hanSolo) {
    console.log(`Han Solo's ${key} is ${value}`);
}

hanSolo.set("vff","Luke");
console.log(hanSolo)
hanSolo.delete("son");
console.log(hanSolo)
hanSolo.clear();
console.log(hanSolo);
