const i =0;

console.log(`あなたの点数は${i}点です。`);
if (100<i) {
    console.log("もう一度数字を入れてください。");

} else if(i === 100){
    console.log("パーフェクトです！");
} else if(i>=80 && i <100){
    console.log(`惜しいあと一歩！後${100-i}点`);
} else if(i>=30 && i <80){
    console.log(`頑張りましょう。後${100-i}点`);
    
} else {
    console.log("出直して来ましょう。");
}

