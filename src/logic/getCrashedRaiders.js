function getCrashedRaiders(ditches, romanBike, romanJumpModules, opponentJumpModules) {
  let crashedRaiders = []

  if (opponentJumpModules * 2 < ditches){
    crashedRaiders.push("Opponent")
  }
  if (romanBike !== 'Tank' && (romanJumpModules * 2 < ditches)) {
      crashedRaiders.push("Roman")
  }
  
  return crashedRaiders
}

module.exports = { getCrashedRaiders }