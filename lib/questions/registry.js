var execSync = require('child_process').execSync
module.exports = {
  type: 'input',
  message: '`npm config get registry` prints:',
  name: 'registry',
  default: function () {
    return execSync('npm config get registry').toString().replace('\n', '')
  }
}
