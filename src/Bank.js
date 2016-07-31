function Bank(ammount) {
  const DEFAULT_CREDIT = 20;
  const FLOAT = 50;
  const HALVE = 0.5;
  // const NO_MONEY = "sorry the machine is empty";

  if(typeof ammount === "undefined"){
    ammount = DEFAULT_CREDIT;
  }
  this.account = ammount;
  this.jackpot = FLOAT;
}


Bank.prototype.isJackpotEmpty = function () {
  return this.jackpot === 0;
};
Bank.prototype.playGame = function(value) {

};
Bank.prototype.removeFromJackpot = function(coin) {
  this.jackpot -= coin;
};

Bank.prototype.addToJackpot = function(coin) {
  this.jackpot += coin;
};

Bank.prototype.debit = function (ammount) {
  this.account -= ammount;
};

Bank.prototype.credit = function (ammount) {
  this.account += ammount;
};
Bank.prototype.hitTheJackpot = function () {
  if(this.isJackpotEmpty()){
    throw new Error("sorry the machine is empty");
  }
  this.credit(this.jackpot);
  this.removeFromJackpot(this.jackpot);
};

Bank.prototype.payOutHalf = function () {
  var halve = Math.ceil((0.5 * this.jackpot));
  this.credit(halve);
  this.removeFromJackpot(halve);
};
