module.exports = {
  type: 'checkbox',
  message: 'I\'m opening this issue because:',
  name: 'reasons',
  choices: [
    'npm is crashing',
    'npm is producing an incorrect install',
    'npm is doing something I don\'t understand',
    'Other'
  ],
  validate: function (answer) {
    if (answer.length < 1) {
      return 'You must choose at least one reason.'
    }
    return true
  }
}
