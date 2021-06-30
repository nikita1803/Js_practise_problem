let keyString = 'a string';
let keyObj = {};
let keyFunc = function() {};

//setting the values 
let myMap = new Map();
myMap.set(keyString,"value associated with 'a string'");
myMap.set(keyObj , 'value associated with keyObj');
myMap.set(keyFunc,'value associated with keyFunc');

//getting values 
let size = myMap.size;
let valStr = myMap.get(keyString);
let isKeyExist = myMap.has('a string');

for (let [key,value] of myMap )
console.log("Loop 1 :"+key + ' = '+value);

for (let [key,value] of myMap .entries())
console.log("Loop 2 :"+key + ' = '+value);

for (let key of myMap.keys() )
console.log("Loop 3 :"+key );

for (let value of myMap.values() )
console.log("Loop 4 :"+value );


//merge two maps.the last repated key wins.
// spread operator wssentially converts a map to an array

let first = new Map([[1,'one'],[2,'two'],[3,'three']]);
let second = new Map([[1,'uno'],[2,'uno']]);
let merged = new Map([...first ,...second,[1,'enis']]);
console.log(merged);

let hasKey = merged.has(1);
let delKey = merged.delete(5);
console.log(hasKey);
console.log(delKey);

if(merged.has(1))
console.log("Pos2 : "+merged.get(2));
merged.clear();
console.log(merged.size);