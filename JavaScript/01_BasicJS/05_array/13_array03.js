const scores = [88, 62, 65, 21, 47, 92,  57, 89, 79, 89, 54, 82, 69, 72, 74, 54, 66, 92, 64, 96, 47, 89, 95, 93, 70, 30, 84, 93, 81, 98, 78, 96, 32, 56, 64, 42, 67];

// この下にコードを書いてください
let sum=0;
let bestScore=0;
let lowScore=100;
for(let i=0;i<scores.length;i++){
  sum +=scores[i];
  if(bestScore<scores[i]){
    bestScore=scores[i];
  }
  if(lowScore>scores[i]){
    lowScore=scores[i];
  }
}
console.log(`${scores.length}個あります。`)
console.log(`平均は${sum/scores.length}点です`);
console.log(`最高は${bestScore}点です`);
console.log(`最低は${lowScore}点です`);
