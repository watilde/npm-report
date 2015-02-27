var test = require("tap").test
var createURL = require("../lib/create-url")

var fixture =  "https://github.com/npm/npm/issues/new"
fixture += "?title=title"
fixture += "&body=npm-debug.log:\n"
fixture += "```\n"
fixture += "0 Hello World!\n"
fixture += "```"

test("create url test", function (t) {
  var url = createURL("title")
  t.equal(fixture, url)
  t.end()
})
