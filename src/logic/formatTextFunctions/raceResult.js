const { formatTrackWinnerAndModules } = require('./formatWinner')
const { formatCrashedRaiders } = require('./formatCrashed')

function raceResult(winner, crashed, track, romanBike, romanModules, opponentModules) {
  let formattedDisplayResult = "";
  let formattedTrackWinnerAndModules = formatTrackWinnerAndModules(winner, track, romanBike, romanModules, opponentModules);
  let formattedCrashed = formatCrashedRaiders(crashed);

  formattedDisplayResult += formattedTrackWinnerAndModules + formattedCrashed;

  return formattedDisplayResult;
}

module.exports = { raceResult }