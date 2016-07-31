function FruitMachine(bank) {
  const BLUE = "blue";
  const RED = "red";
  const GREEN = "red";
  const YELLOW = "yellow";
  const WHEEL = [BLUE, RED, GREEN, YELLOW];

  this.bank = bank;
  this.playerTurn = [];
  this.wheel = WHEEL;
}
FruitMachine.prototype.insertCoin = function(coin) {
  this.coin = coin;
  this.bank.playGame();
};
FruitMachine.prototype.wheelOneSpin = function () {
  var spin = this.wheel[Math.floor(Math.random()*this.wheel.length)];
  this.playerTurn.push(spin);
};

FruitMachine.prototype.spinTheWheels = function () {
  var i = 0;
  while (i < 4) {
    this.wheelOneSpin();
    i++;
  }
};

FruitMachine.prototype.showBalance = function () {
  this.bank.account();
};
