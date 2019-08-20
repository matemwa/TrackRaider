function formatCrashedRaiders(crashed){
  let crashedAlert = ""
  console.log(crashed)
  if (crashed.length === 0){
    crashedAlert = "No one fell into the ditch. "
  }
  else if (crashed.length === 1){
    crashedAlert = crashed.join() + " fell into the ditch."  
  }
  else {
    crashedAlert = " Unfortunetaly both raiders, Roman and his Opponent fell into a ditch."
  }
  
  return crashedAlert
}

module.exports = { formatCrashedRaiders }