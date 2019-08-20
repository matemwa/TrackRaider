const { getRomanBikeSpeed } = require("./getRomanSpeed")
const { getFinalSpeed } = require("./getFinalSpeed")


function extractGameConfig(gameConfig) {
  let extractedGameConfig = JSON.parse(JSON.stringify(gameConfig))

  extractedGameConfig.ditch = 0;
  extractedGameConfig.curve = 0;
  
  let obstacles = [...extractedGameConfig.obstacle];
  for (let i = 0; i < obstacles.length; i++){
    if (obstacles[i] === 'Ditch'){
      extractedGameConfig.ditch +=1;
    }
    else if (obstacles[i] === 'Curve'){
      extractedGameConfig.curve +=1;
    }
  }

  extractedGameConfig.romanJumpModules = 0;
  let speedModulesRoman = extractedGameConfig.romanSpeedModule = 0;
  let modules = [...extractedGameConfig.module];

  for (let i = 0; i < modules.length; i++){
    if (modules[i] === 'Speed'){
      extractedGameConfig.romanSpeedModule +=1;
    }
    else if (modules[i] === 'Jump'){
      extractedGameConfig.romanJumpModules +=1;
    }
  }

  extractedGameConfig.opponentJumpModules = 0;
  let speedModulesOpponent = extractedGameConfig.opponentSpeedModule = 0;
  let opponentModules = [...extractedGameConfig.oponentModule];

  for (let i = 0; i < opponentModules.length; i++){
    if (opponentModules[i] === 'Speed'){
      extractedGameConfig.opponentSpeedModule +=1;
    }
    else if (opponentModules[i] === 'Jump'){
      extractedGameConfig.opponentJumpModules +=1;
    }
  }

  let romanBaseSped = extractedGameConfig.romanBaseSpeed = getRomanBikeSpeed(extractedGameConfig.bike)
  let bike = extractedGameConfig.bike
  let curves = extractedGameConfig.curve;

  extractedGameConfig.romanFinalSpeed = getFinalSpeed(curves, romanBaseSped, speedModulesRoman, bike)
  extractedGameConfig.romanFinalSpeed = getFinalSpeed(curves, 90, speedModulesOpponent)

  return extractedGameConfig;

  
  }


module.exports = { extractGameConfig }