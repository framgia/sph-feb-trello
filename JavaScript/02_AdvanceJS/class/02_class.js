class Pyramid {
  constructor(vertical, side, height) {
    this.vertical = vertical;
    this.side = side;
    this.height = height;
  }
  // ゲッター
  volume() {
    return this.calcVolume();
  }
  // メソッド
  calcVolume() {
    return this.vertical * this.side * this.height /3;
  }
}

const egypt = new Pyramid(8, 5, 3);

console.log(egypt.volume());