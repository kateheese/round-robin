var robin = {
  roundRobin: function(input) {
    if(input.length == 0) {
      return [];
    }
    var inputRemix = input.slice();
    var halves = [];
    var pairs = [];
    var seasonedPairs = [];
    if(inputRemix.length % 2 != 0) {
      inputRemix.splice(1,0,'none');
    }
    halves.push(inputRemix.slice(0,inputRemix.length/2));
    halves.push(inputRemix.slice(inputRemix.length/2,inputRemix.length).reverse());
    splitPairs();
    function splitPairs() {
      for(var i = 0; i < inputRemix.length/2; i++) {
        pairs.push([halves[0][i], halves[1][i]]);
      }
      seasonedPairs.push(pairs);
      pairs = [];
    };

    function shiftHalves() {
      var first = halves[1].shift();
      halves[0].splice(1,0,first);
      var last = halves[0].pop();
      halves[1].push(last);
    };
    for(var j = 0; j < inputRemix.length-2; j ++) {
      shiftHalves(); 
      splitPairs();
    };
    return seasonedPairs;
  }
};

module.exports = robin;