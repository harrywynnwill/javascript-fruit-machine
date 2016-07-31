describe("FruitMachine", function() {
  var fruity;
  var bank;

  beforeEach(function() {
    bank = jasmine.createSpyObj('bank',['playGame', 'account']);
    fruity = new FruitMachine(bank);
  });

  it("interacts with the bank and allows you to play the fruitmachine", function() {
    fruity.insertCoin();
    expect(bank.playGame).toHaveBeenCalled();

  });

  it("spins a wheel on the fruit machine", function(){
    spyOn(Math, 'random').and.returnValue(0);

    fruity.wheelOneSpin();
    expect(fruity.playerTurn).toEqual(["blue"]);
  });
  it("returns the players balance", function(){
    fruity.showBalance();
    expect(bank.account).toHaveBeenCalled();
  });

  it("spins the wheels of the fruit machine", function(){
    spyOn(Math, 'random').and.returnValue(0);
    fruity.spinTheWheels();
    expect(fruity.playerTurn).toEqual(["blue","blue","blue","blue"]);
  });




});
