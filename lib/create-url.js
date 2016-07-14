var fs = require("fs")
var path = require("path")

module.exports = function (title) {
  var file = path.join(process.cwd(), "npm-debug.log")
  var body = ""
  var exist = fs.existsSync(file)
  var endpoint = "https://github.com/npm/support-cli/issues/new?"
  var opt = ""
  if (exist) {
    body = "<details>\n"
    body += "<summary>npm-debug.log:</summary>\n"
    body += "```\n"
    body += fs.readFileSync(file)
    body += "```\n"
    body += "</details>\n"
  }
  if (title) opt += "title=" + title
  if (title && body) opt += "&"
  if (body) opt += "body=" + body
  return endpoint + opt
}
