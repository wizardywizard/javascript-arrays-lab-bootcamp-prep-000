var kittens = ['Milo','Otis','Garfield'] //define your array here
var kittens2 = "Ralph"
// Add your functions and code here
function destructivelyAppendKitten (Ralph,kitten) {
kittens.push(Ralph)
  return kittens
}
function destructivelyPrependKitten (bob,kitten) {
  kittens.unshift(bob)
  return kittens
}
function destructivelyRemoveLastKitten (kitten){
  kitten.pop(kitten)
  
}