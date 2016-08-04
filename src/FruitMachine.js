function FruitMachine(bank, rules) {

  const WHEEL = [1, 2, 3, 4];
  this.gameRules = rules;
  this.bank = bank;
  this.playerTurn = [];
  this.wheel = WHEEL;
  this.coin;
}
FruitMachine.prototype.insertCoin = function(coin) {
  this.coin = coin;
  this.bank.playGame(coin);
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
FruitMachine.prototype.showJackpot = function () {
  return this.bank.jackpot;
};




FruitMachine.prototype.resultOfSpin  = function (spin) {
  if(this.gameRules.isAllTheSame(spin)){
    console.log(spin)
    console.log(this.gameRules.isAllTheSame(spin))

    this.bank.hitTheJackpot();
  }
  else if(this.gameRules.isAllDifferent(spin)){
    this.bank.payOutHalf();
  }
  else if(this.gameRules.isAdjacent(spin)){
   this.bank.payOutFiveTimes(this.coin);
  }
};

FruitMachine.prototype.clearTheTurn = function() {
  this.playerTurn = [];
};
