var execSync = require('child_process').execSync
module.exports = {
  type: 'input',
  message: '`node -v` prints:',
  name: 'node',
  default: function () {
    return execSync('node -v').toString().replace('\n', '')
  }
}
