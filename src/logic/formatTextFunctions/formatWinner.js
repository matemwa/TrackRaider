const { formatModulesToString } = require('./formatModulesToString')

function formatTrackWinnerAndModules(winner, track, romanBike, romanModules, opponentModules) {
  let winnerFormatted = ""
  let romanModulesString = formatModulesToString(romanModules)
  let opponentModulesString = formatModulesToString(opponentModules)

  if (winner === 'Roman'){
    winnerFormatted = winner + " has succesfully won the " + track + " race on a " + romanBike + " with a " + romanModulesString + "!" +
    "He won against his opponent riding with " + opponentModulesString + ". "
  }

  else if (winner === 'Opponent'){
    winnerFormatted = winner + " has succesfully won the " + track + " race! His bike had " + opponentModulesString + "!" +
    "He won against Roman riding on a " + romanBike + " with a " + romanModulesString + ". "
  }

  else {
    winnerFormatted = winner + " has completed the race. Roman had his " + romanBike + " with " + romanModulesString + ". " + 
    "His opponent rode on a bike with " + opponentModulesString + ". "
  }

  return winnerFormatted
}

module.exports = { formatTrackWinnerAndModules }