function getFinalSpeed(curvesAmount, baseSpeed, speedModules, bike) {
  let raiderSpeed = 0;

  if (curvesAmount >= 4){
    raiderSpeed = baseSpeed
  }
  else if (curvesAmount <= 3){
    let trackCoefficient = 1 - curvesAmount*0.25
    raiderSpeed = (baseSpeed + (baseSpeed * speedModules * 0.5 * trackCoefficient))
  };

  if (bike === 'Speedster'){
    raiderSpeed = (baseSpeed + baseSpeed * speedModules * 0.5)
  };

  return raiderSpeed;
}

module.exports = { getFinalSpeed }