var opener = require("opener")
var argv = require('minimist')(process.argv.slice(2))
var createURL = require("./lib/create-url")

var title = ""
var url = ""
var help = ""

help += "\nUsage: npm-report <options>\n\n"
help += "Options:\n"
help += "  --title=\"Issue title\""

if (argv.help || argv.h) {
  console.log(help)
  return
}

if (argv.title) title = argv.title
url = createURL(title)
opener(url)
