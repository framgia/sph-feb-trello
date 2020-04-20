const gcb = (num1,num2) => {
    if(num2 === 0){
      return num1;
    }
        return gcb(num2, num1 % num2);
}

const lcm =  (num1,num2) => {
  return num1 * num2 / gcb(num1,num2);
}
console.log(lcm(3,2));
