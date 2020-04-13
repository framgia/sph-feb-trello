const pesoYenRate = 2;


const convertToYen = (priceDollar)=>{
  return priceDollar * pesoYenRate;
}


const information = (name, price) => {
  console.log(`ペソで${name}は${price}ドルです`);
  

  const priceYen = convertToYen(price);

  console.log(`日本円で${name}は${priceYen}円です`);
  
  console.log('--------------');
};

information("バナナ", 50);
information("マンゴー", 100);
