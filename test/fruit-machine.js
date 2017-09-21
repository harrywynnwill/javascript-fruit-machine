describe("FruitMachine", function() {
  var fruity;
  var bank;
  var rules;

  beforeEach(function() {
    bank = jasmine.createSpyObj('bank',['playGame', 'showAccount','hitTheJackpot']);
    rules = jasmine.createSpyObj('rules',['isAllTheSame','isAllDifferent', 'isAdjacent'])
    fruity = new FruitMachine(bank, rules);
  });

  it("interacts with the bank and allows you to play the fruitmachine", function() {
    fruity.insertCoin();
    expect(bank.playGame).toHaveBeenCalled();

  });

  it("spins a wheel on the fruit machine", function(){
    spyOn(Math, 'random').and.returnValue(0);

    fruity.wheelOneSpin();
    expect(fruity.playerTurn).toEqual([1]);
  });
  it("returns the players balance", function(){
    fruity.showBalance();
    expect(bank.showAccount).toHaveBeenCalled();
  });

  it("spins the wheels of the fruit machine", function(){
    spyOn(Math, 'random').and.returnValue(0);
    fruity.spinTheWheels();
    expect(fruity.playerTurn).toEqual([1,1,1,1]);
  });

  it("checks the result of the spin", function(){
    fruity.spinTheWheels();
    fruity.resultOfSpin();

    expect(rules.isAllTheSame).toHaveBeenCalled();
    expect(rules.isAllDifferent).toHaveBeenCalled();
    expect(rules.isAdjacent).toHaveBeenCalled();
  });




});
