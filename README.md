# npm-report
Report your error to npm easily

## What's this
Sometime you may see an npm error like the following:
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

## Usage
```
$ npm install -g npm-report
$ npm-report
? Please review this checklist before reporting your issue.
- Please check if there's a solution in the troubleshooting wiki:
  https://github.com/npm/npm/wiki/Troubleshooting
- Also ensure that your new issue conforms to npm's contribution guidelines:
  https://github.com/npm/npm/wiki/Contributing-Guidelines
- Participation in this open source project is subject to the npm Code of Conduct:
  https://www.npmjs.com/policies/conduct
Checked?
```
