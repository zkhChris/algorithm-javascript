//Math.random()取0-1，但取不到界
function randomRange(min,max){
  var result=Math.floor(Math.random()*(max-min+1)+min);
  return result;
}
