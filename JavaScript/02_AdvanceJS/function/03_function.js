const expo =  (number,n) => {
  for(let i=0;i<n-1;i++){
      number *= n;
  }
  return number
}

console.log(expo(3,2));