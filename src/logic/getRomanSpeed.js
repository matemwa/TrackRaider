function getRomanBikeSpeed(romanBike){
  let speed = 0;

  if (romanBike === 'Raider'){
    speed = 100
  }
  else if (romanBike === 'Speedster'){
    speed = 200
  }
  else if (romanBike === 'Tank'){
    speed = 50
  }
  return speed
}

module.exports = { getRomanBikeSpeed }