var opener = require('opener')
var template = require('lodash.template')
var fs = require('fs')
var path = require('path')
var md = fs.readFileSync(path.join(__dirname, 'template.md'), 'utf8')
var message = template(md)
var endpoint = 'https://github.com/npm/npm/issues/new?body='

module.exports = function (answers) {
  var body = message(answers)
  opener(endpoint + body)
}
