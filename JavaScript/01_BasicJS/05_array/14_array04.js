const users = [
  {
    name: 'Yutaka',
    age: 26,
    nationality: '日本',
  },
  {
    name: 'Zain',
    age: 21,
    nationality: 'パキスタン',
  },
  {
    name: 'Ryuichi',
    age: 24,
    nationality: 'イラン',
  },
];

// この下にコードを書いてください
for(let i=0;i<users.length;i++){
  console.log(i+1+"人目");
  console.log("名前："+users[i].name);
  console.log("年齢："+users[i].age);
  console.log("国籍："+users[i].nationality);
}