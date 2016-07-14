var message = 'Please review this checklist before reporting your issue.\n\n' +
'- Please check if there\'s a solution in the troubleshooting wiki:\n' +
'  https://github.com/npm/npm/wiki/Troubleshooting\n\n' +
'- Also ensure that your new issue conforms to npm\'s contribution guidelines:\n' +
'  https://github.com/npm/npm/wiki/Contributing-Guidelines\n\n' +
'- Participation in this open source project is subject to the npm Code of Conduct:\n' +
'  https://www.npmjs.com/policies/conduct\n' +
'Checked?'

module.exports = {
  type: 'confirm',
  message: message,
  name: 'thanks',
  validate: function (answer) {
    if (!answer) return false
  }
}
