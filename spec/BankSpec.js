describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("initalizes with default credit", function(){

    expect(bank.account).toEqual(20);
  });

  it("intializes with a custom credit", function(){
    bankForty = new Bank(40);
    expect(bankForty.account).toEqual(40)
  });

  it("debits the user account of 10 coins", function(){
    bank.debit(10);
    expect(bank.account).toEqual(10);
  });

  it("credits the user account with 10 coins", function(){
    bank.credit(10);
    expect(bank.account).toEqual(30);
  });
  it("checks to see if the jackpot is empty", function(){
    bank.removeFromJackpot(50);
    expect(bank.isJackpotEmpty()).toBeTruthy();
  });
  it("removes coins from the jackpot", function(){
    bank.removeFromJackpot(10);
    expect(bank.jackpot).toEqual(40);
  });
  it("adds coins to the jackpot", function(){
    bank.addToJackpot(10);
    expect(bank.jackpot).toEqual(60);
  });
  it("moves credits the users account with the jackpot", function(){
    bank.hitTheJackpot();
    expect(bank.account).toEqual(70);
    expect(bank.jackpot).toEqual(0);
  });
  it("raises an error if the jackpot is empty", function(){
    bank.removeFromJackpot(50);
    expect(function(){bank.hitTheJackpot();}).toThrow(new Error("sorry the machine is empty"));
  })
  it("pays out half of the jackpot", function(){
    bank.payOutHalf();
    expect(bank.jackpot).toEqual(25);
  });

});
