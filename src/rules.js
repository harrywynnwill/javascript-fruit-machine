function Rules(){
}
Rules.prototype.isAllTheSame = function (spin) {
  if(spin[0] === spin[1] && spin[1] === spin[2] && spin[2] ===spin[3] ){
    return true;
  }
  return false;
};
Rules.prototype.isAllDifferent = function (spin) {
  return (new Set(spin)).size === spin.length;
};
Rules.prototype.isAdjacent = function (spin) {
  if(spin[0]===spin[1] || spin[1]===spin[2] || spin[2]===spin[3] ){
    return true;
  }
  return false;
};
