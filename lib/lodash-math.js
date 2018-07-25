const _ = require('lodash')

const init = () => {
  const sum = _.add(10, 10)
  const sub = _.subtract(30, 10)
  const roundUp = _.ceil(19.5)
  const roundDown = _.floor(20.5)
  const divide = _.divide(200, 10)
  const multiply = _.multiply(2, 10)
  const max = _.max([5,8,10,20])
  const min = _.min([20, 40,50,60])
  const mean = _.mean([10,30])
  const sumArray = _.sum([4, 2, 8, 6]);
  const range = _.inRange(20, 10, 30)
  const random = _.random(100)

  console.log(sum)
  console.log(sub)
  console.log(roundUp)
  console.log(roundDown)
  console.log(divide)
  console.log(multiply)
  console.log(max)
  console.log(min)
  console.log(mean)
  console.log(sumArray)
  console.log(range)
  console.log(random)
  console.log()
  console.log()

  
  
}

module.exports ={
  init
} 