function theBeatlesPlay(musicians,instruments) {
  var allBeatles = [];
  for (let i = 0; i < musicians.length; i++){
    allBeatles.push(musicians[i] + 'plays' + instruments[i])
  }
  return allBeatles
}