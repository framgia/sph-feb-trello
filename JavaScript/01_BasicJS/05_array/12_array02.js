const numbers = [1, 4, 6, 9, 13, 16];

let oddSum = 0;
let evenSum = 0;

for (let i=0;i<numbers.length; i++) {
    if(numbers[i] % 2 === 0){
    evenSum += numbers[i];
    } else {
    oddSum += numbers[i];
    }
}

console.log(`奇数の和は${oddSum}です`);
console.log(`偶数の和は${evenSum}です`);