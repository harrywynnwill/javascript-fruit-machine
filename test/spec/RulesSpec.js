describe("Rules", function(){
  var rules;
  var allTheSame = [1,1,1,1];
  var allDifferent = [1,2,3,4];
  var adjacent = [1,2,2,3];

  beforeEach(function(){
    rules = new Rules();
  });

  it("returns true if all the slots are the same", function(){
    expect(rules.isAllTheSame(allTheSame)).toBeTruthy();
    expect(rules.isAllTheSame(allDifferent)).toBeFalsy();
    expect(rules.isAllTheSame(adjacent)).toBeFalsy();
  });

  it("returns true if all the slots are different", function(){
    expect(rules.isAllDifferent(allDifferent)).toBeTruthy();
    expect(rules.isAllDifferent(allTheSame)).toBeFalsy();
  });
  it("return true if there are two or more adjacent", function(){
    expect(rules.isAdjacent(adjacent)).toBeTruthy();
  //  expect(rules.isAdjacent(allDifferent)).toBeFalsy();
  });
});
