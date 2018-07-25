const _ = require('lodash')

const inRange = (a,b,c) =>{
  if((a && b && c) == null){
    throw('No amount of counting number given.')
    return
  }
  return _.inRange(a,b,c)
}

module.exports = {
  inRange
}