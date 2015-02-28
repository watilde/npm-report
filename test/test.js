var fs = require("fs")
var path = require("path")
var test = require("tap").test
var createURL = require("../lib/create-url")
var fixturePath = path.join(__dirname, "fixture.txt")
var fixture =  fs.readFileSync(fixturePath, {encoding: "utf8"})

test("create url test", function (t) {
  var url = createURL("title")
  t.equal(fixture, url)
  t.end()
})
