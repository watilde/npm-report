# npm-report
Report error to npm easily

## What's this
Sometime you may see a npm error like the following:
```
npm ERR! Darwin x.x.x
npm ERR! argv "/path/to/node/x.x.x/bin/node" "/path/to/npm" "xxx"
npm ERR! node x.x.x
npm ERR! npm  x.x.x

npm ERR! Invalid package.json
npm ERR!
npm ERR! If you need help, you may report this error at:
npm ERR!     <http://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /path/to/npm-debug.log
```

When you need support after reading [Troubleshooting](https://github.com/npm/npm/wiki/Troubleshooting), this command help you report easily.
```
$ ls
package.json npm-debug.log
$ npm-report --title="blah blah..."
```

## Install
Using npm.
```
$ npm install -g npm-report
```

## Usage
```
Usage: npm-report <options>

Options:
  --title="Issue title"
```
