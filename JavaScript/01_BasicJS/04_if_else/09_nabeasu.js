const limit = 40;

for(let i = 1; i <= limit; i++) {

if(i % 5 == 0 && /3/.test(i)) {
    console.log("AhoWan");
} else if(i % 3 == 0 || /3/.test(i)){
    console.log("Aho")
} else if(i % 5 == 0){
    console.log("Wan");
}else{
    console.log(i)    
}
}