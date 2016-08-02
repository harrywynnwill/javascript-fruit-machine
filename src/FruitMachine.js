function FruitMachine(bank, rules) {

  const WHEEL = [1, 2, 3, 4];
  this.rules = rules;
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
  return this.bank.showAccount();
};

FruitMachine.prototype.resultOfSpin = function () {
  if(this.rules.isAllTheSame(this.playerTurn)){
    this.bank.hitTheJackpot();
  }
  else if(this.rules.isAllDifferent(this.playerTurn)){
    this.bank.payOutHalf();
  }
  else if(this.rules.isAdjacent(this.playerTurn)){
    this.bank.payOutFiveTimes();
  }
};
