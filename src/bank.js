'use strict';

function Bank(amount) {
  const DEFAULT_CREDIT = 20;
  const FLOAT = 50;
  const HALVE = 0.5;
  // const NO_MONEY = "sorry the machine is empty";

  if(typeof amount === "undefined"){
    amount = DEFAULT_CREDIT;
  }
  this.account = amount;
  this.jackpot = FLOAT;
}

function Account(props) {
  return <h1>balance {props.name}</h1>;
}

const element = <Account name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('container')
);

Bank.prototype.showAccount = function () {
  return this.account;
};
Bank.prototype.isJackpotEmpty = function () {
  return this.jackpot === 0;
};
Bank.prototype.playGame = function(coin) {
  this.debit(coin);
  this.addToJackpot(coin);
};
Bank.prototype.removeFromJackpot = function(coin) {
  this.jackpot -= coin;
};
Bank.prototype.addToJackpot = function(coin) {
  this.jackpot += coin;
};

Bank.prototype.debit = function (amount) {
  this.account -= amount;
};

Bank.prototype.credit = function (amount) {
  this.account += amount;
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

Bank.prototype.payOutFiveTimes = function (coin) {
  var i = 0;
  while (i < 5){
    if(this.isJackpotEmpty()){
      this.credit(coin);
    }
    else{
      this.credit(coin);
      this.removeFromJackpot(coin);
    }
    i++;
  }
};
