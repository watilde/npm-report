var execSync = require('child_process').execSync
module.exports = {
  type: 'input',
  message: '`npm -v` prints:',
  name: 'npm',
  default: function () {
    return execSync('npm -v').toString().replace('\n', '')
  }
}
