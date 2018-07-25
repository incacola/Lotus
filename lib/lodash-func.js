const _ = require('lodash')

const func = () => {
  var saves = ['profile', 'settings'];

  var done = _.after(saves.length, function () {
    console.log('done saving!');
  });

  _.forEach(saves, function (type) {
    console.log(type)
    done()
  });

}

const string = () => {
  const trunc = _.truncate('hi-diddly-ho there, neighborino', 
  {
    'length': 26,
    'omission': '... read more'
  }
);

  console.log(trunc);

}

module.exports = {
  func,
  string
}