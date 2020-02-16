function theBeatlesPlay(musicians,instruments) {
  var allBeatles = [];
  for (let i = 0; i < musicians.length; i++){
    allBeatles.push(musicians[i] + ' plays ' + instruments[i])
  }
  return allBeatles
}

function johnLennonFacts(facts){
  var oldFacts = [...facts]
  var newFacts = []
  var i = 0
  while (i < oldFacts.length) {
    newFacts.push(oldFacts[i] + "!!!")
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n){
  
}