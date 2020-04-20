class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Japanese extends Human {
  constructor(name,age,race){
    super(name,age);
    this.race = race;
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);

    console.log(`出身は${this.race}です`);
    
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`後${humanAge}年生きることができます。`);
  }
  
  getHumanAge() {
    return 120 - this.age ;
  }
}

const japanaese = new Japanese("Yutaka", 26,"日本");
japanaese.info();

