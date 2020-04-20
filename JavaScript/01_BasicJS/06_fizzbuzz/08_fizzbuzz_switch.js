for (let index = 0; index <= 100; index++) {
  switch (true) {
    case (index % 5 === 0 && index % 3 === 0):
        console.log("FizzBuzz");
        break;
    case index % 3 === 0:
        console.log("Fizz");
        break;
    case index % 5 === 0:
        console.log("Buzz");
        break;
    default:
        console.log(index);
        break;
  }
}