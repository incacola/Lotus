/*
 * 1. eine function hat die uns eine boolean returnd
 * 2. wenn Folgende zahlen (3,2,4) übergeben werden sollte es true return
 * 3. wenn Folgende zahlen (3,6,12) übergeben werden sollte es false return
 */

const assert = require('assertthat')
const mocha = require('../lib/mocha')

//const inRange = (first, second, third) => {

//  return mocha.inRange()
//}



test('Mocha.js return true on given (3,2,4) numbers', () => {
  const actual = mocha.inRange(3, 2, 4),
    expected = true

  assert.that(actual).is.equalTo(expected)
})

test('Mocha.js return false on given (3,6,12) numbers', () => {
  const actual = mocha.inRange(3,6,12),
    expected = false

  assert.that(actual).is.equalTo(expected)
})

test('Mocha.js returns a boolean', () => {
  const actual = typeof mocha.inRange(3,6,12),
    expected = 'boolean'

  assert.that(actual).is.equalTo(expected)
})

test('Mocha.js throws error', () => {
  const actual = typeof mocha.inRange()

  assert.that(actual).is.throwing('No amount of counting number given.')
})