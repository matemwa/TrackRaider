function formatModulesToString(modules){
  let modulesFormatted = ""

  if (modules.length === 0) {
    modulesFormatted += "no modules!"
  }
  else if (modules.length === 1){
    modulesFormatted += " only " + modules[0] + "!"
  }
  else if (modules.length > 1){
    modulesFormatted += modules.slice(0, -1).join(', ') + ' and ' + modules.slice(-1);
    // modulesFormatted += typeof(modules)
  }
  
  return modulesFormatted;
}

module.exports =  { formatModulesToString }