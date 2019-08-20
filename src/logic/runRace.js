const { getCrashedRaiders } = require("./getCrashedRaiders")
const { getWinner } = require("./getWinner")
const { raceResult } = require("./formatTextFunctions/raceResult")
const { extractGameConfig } = require("./extractGameConfig")


function runRace(gameConfig) {

  let extractedGameConfig = extractGameConfig(gameConfig)

  const track = {
    name: extractedGameConfig.track,
    obstacles: extractedGameConfig.obstacle,
    curvesAmount: extractedGameConfig.curve,
    ditchesAmount: extractedGameConfig.ditch
    }

  const roman = {
    bike: extractedGameConfig.bike, 
    modules: extractedGameConfig.module, 
    jumpModules: extractedGameConfig.romanJumpModules,
    finalSpeed: extractedGameConfig.romanFinalSpeed
  }

  const opponent = {
    baseSpeed: 90,
    modules: extractedGameConfig.oponentModule, 
    jumpModules: extractedGameConfig.opponentJumpModules,
    finalSpeed: extractedGameConfig.opponentFinalSpeed
  }

  const crashedRaiders = getCrashedRaiders(track.ditchesAmount, roman.bike, roman.jumpModules, opponent.jumpModules);
  const winner = getWinner(roman.finalSpeed, opponent.finalSpeed, crashedRaiders);
  const resultOfTheRace = raceResult(winner, crashedRaiders, track.name, roman.bike, roman.modules, opponent.modules)

  return resultOfTheRace;
}

module.exports = { runRace }