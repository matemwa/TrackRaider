const { runRace } = require("./runRace")

function initialize(gameConfig) {
  
  const resultString = runRace(gameConfig);
  return resultString;
}


module.exports = { initialize }



