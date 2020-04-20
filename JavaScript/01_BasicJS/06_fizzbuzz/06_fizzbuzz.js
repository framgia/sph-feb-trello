const index = 10;

if (index % 3 === 0 && index % 5 === 0) {
    console.log('FizzBuzz');
} else if (index % 3 === 0) {
    console.log('Fizz');
} else if (index % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(index);
}