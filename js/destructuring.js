const fish = {
    name: 'king Hilsa',
    address: 'Barishal',
    color: 'silver',
    phone: '01717774584',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const {age, name} = {name: 'Almas', age: 56, profession: 'teacher'}
console.log(age);

const {address} = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 33];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Rahim', 'Karim']
}

const [baba, cacha] = getNames();
console.log(cacha, baba);