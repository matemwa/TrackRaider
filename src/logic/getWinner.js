function getWinner(romanFinalSpeed, opponentFinalSpeed, crashedRaiders) {
  let winner = 'Noone'

  if (crashedRaiders.includes("Roman") && crashedRaiders.includes("Opponent")) {
    winner = "Noone";
  }
  else if (crashedRaiders.includes("Roman"))winner =  "Opponent"
  
  else if  (crashedRaiders.includes("Opponent")) winner =  "Roman"
  
  else if (romanFinalSpeed === opponentFinalSpeed) winner =  "Tie"
  
  else if (romanFinalSpeed > opponentFinalSpeed) winner =  "Roman"
  
  else winner =  "Opponent"
  
  return winner
}

module.exports = { getWinner }