
function Rules(){
}

//
// Rules.prototype.range = function (begin, end) {
//   var i;
//   for (let i = begin; i < end; ++i) {
//     yield i;
//   }
// };



//
// function each_cons (l, n) {
//   return [l.slice(i, i + n) for (i in (range(0, l.length - n + 1)))]
// };


// Array.prototype.pairwise = function (callback) {
//     var next, current;
//
//     while (this.length) {
//         current = next ? next : this.shift();
//         next = this.shift();
//         callback(current, next);
//     }
// };

Rules.prototype.isAllTheSame = function (spin) {
  for (var i=0; i < spin.length ; i++){

    if (spin[i] === spin[i+1]){
      return true;
    }
    else
    {
      return false;
    }
  }
};

Rules.prototype.isAllDifferent = function (spin) {
  for (var i=0; i < spin.length ; i++){
    if (spin[i] !== spin[i+1]){
      return true;
    }
    else
    {
      return false;
    }
  }
};

Rules.prototype.isAdjacent = function (spin) {

};
