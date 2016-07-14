var inquirer = require('inquirer')

module.exports = {
  type: 'checkbox',
  message: 'Network issues:',
  name: 'network',
  choices: [
    new inquirer.Separator('Geographic location where npm was run:'),
    'I use a proxy to connect to the npm registry',
    'I use a proxy to connect to the web',
    'I use a proxy when downloading Git repos',
    'I access the npm registry via a VPN',
    'I don\'t use a proxy, but have limited or unreliable internet access',
    new inquirer.Separator('Container:'),
    'I develop using Vagrant on Windows',
    'I develop using Vagrant on OS X or Linux',
    'I develop / deploy using Docker',
    'I deploy to a PaaS (Triton, Heroku)'
  ]
}
