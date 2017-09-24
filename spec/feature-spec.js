describe ("Features", function(){

  beforeEach(function(){
    rules = new Rules();
    bank = new Bank();
    fruity = new FruitMachine(bank, rules);
  });
  xit("player recieves the jackpot for all 4 colours", function(){
    fruity.insertCoin(1);
    spyOn(Math, 'random').and.returnValue(0);
    fruity.spinTheWheels();
    fruity.resultOfSpin(fruity.playerTurn);
    expect(fruity.showBalance()).toEqual(70);
    expect(fruity.bank.jackpot).toEqual(0);
  });

  it("player recieves 1/2 the jackpot for all different colours", function(){
    fruity.insertCoin(1);
    console.log(fruity.showBalance());
    fruity.resultOfSpin([1,2,2,4]);

    console.log(fruity.showBalance());

    expect(fruity.showBalance()).toEqual();
    expect(fruity.bank.jackpot).toEqual(25);
  });
});
