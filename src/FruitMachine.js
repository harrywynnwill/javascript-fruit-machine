function FruitMachine(bank, rules) {

  const WHEEL = [1, 2, 3, 4];
  const JACKPOT_MSG = "WINNNER WINNER CHICKEN DINNER! You've hit the Jacky!!!";
  const ALL_DIFF_MSG = "You win 1/2 the Jacky for all different slots";
  const ADJACENT = "Two or more adjacent slots are the same, you win 5x";
  this.gameRules = rules;
  this.bank = bank;
  this.playerTurn = [];
  this.wheel = WHEEL;
  this.coin;
  this.jackpot_msg = JACKPOT_MSG;
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
FruitMachine.prototype.bonusPrizeMessage = function (spin) {
  this.gameRules.isAdjacent(spin) ? this.jackpot_msg : "";
};




FruitMachine.prototype.resultOfSpin  = function (spin) {
  if(this.gameRules.isAllTheSame(spin)){
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
