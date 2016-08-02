describe ("Features", function(){

  beforeEach(function(){
    rules = new Rules();
    bank = new Bank();
    fruity = new FruitMachine(bank, rules);
  });
it("player recieves the jackpot for all 4 colours", function(){
  fruity.insertCoin();
  spyOn(Math, 'random').and.returnValue(0);
  fruity.spinTheWheels();
  console.log(fruity.playerTurn);
  fruity.resultOfSpin();
  console.log(fruity.bank.account)
  expect(fruity.showBalance()).toEqual(4);
});

});
