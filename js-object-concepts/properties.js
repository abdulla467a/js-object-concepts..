const bottle = {
    color: 'purple',
    hold: 'hot',
    price: 505,
    isCleaned: false
};
delete bottle.isCleaned;
console.log(bottle);
// getting all properties names
const keys = Object.keys(bottle);
console.log(keys);
// get all values 
const values = Object.values(bottle);
console.log(values);


const pairs = Object.entries(bottle);

console.log(pairs);


Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;

delete bottle.isCleaned;
console.log(bottle);