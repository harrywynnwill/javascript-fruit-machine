describe("FruitMachine", function() {
  var fruity;
  var bank;

  beforeEach(function() {
    bank = jasmine.createSpyObj('bank',['playGame']);
    fruity = new FruitMachine(bank);
  });

  it("interacts with the bank and allows you to play the fruitmachine", function() {
    fruity.insertCoin();
    expect(bank.playGame).toHaveBeenCalled();
  });

  it("spins a wheel on the fruit machine", function(){
    fruity.wheelOneSpin();
    expect(fruity.playerTurn).toEqual([]);
  });
});
