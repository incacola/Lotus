const _ = require('lodash')

const init = () =>{
  const date = _.now()

  console.log(date)
}

module.exports = {
  init
}