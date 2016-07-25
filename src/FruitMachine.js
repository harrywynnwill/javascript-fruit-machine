function FruitMachine(bank) {
  var blue = Symbol("blue");
  var red = Symbol("red");
  var green = Symbol("red");
  var yellow = Symbol("yellow");
  const WHEEL = [blue, red, green, yellow];

  this.bank = bank;
  this.playerTurn = [];
  this.wheel = WHEEL;
}
FruitMachine.prototype.insertCoin = function(coin) {
  this.coin = coin;
  this.bank.playGame();
};
FruitMachine.prototype.wheelOneSpin = function () {
  var spin = this.wheel[Math.floor(Math.random()*this.wheel.length)]
  return spin; 
};
