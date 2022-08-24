// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'doel';
const message = bird + 'something';
console.log(message);

const numbers = [12, 45, 32, 67];
// reassign is not allowed
// numbers = [55, 23, 44, 33];
numbers.push(99);
numbers[1] = 88;
console.log(numbers);

const student = {
    name: 'rahim', 
    address: 'dhaka'
}
// student = {name: 'rahima'}
student.name = 'rahima';

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}

console.log(numbers);