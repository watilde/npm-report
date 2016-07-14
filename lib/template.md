#### I'm opening this issue because:

- [<% if (reasons.indexOf('npm is crashing') !== -1) { %>x<% } else { %> <% } %>] npm is crashing.
- [<% if (reasons.indexOf('npm is producing an incorrect install') !== -1) { %>x<% } else { %> <% } %>] npm is producing an incorrect install.
- [<% if (reasons.indexOf('npm is doing something I don\'t understand') !== -1) { %>x<% } else { %> <% } %>]  npm is doing something I don't understand.
- [<% if (other !== -1) { %>x<% } else { %> <% } %>] Other: <%= other %>

#### What's going wrong?

<%= detail %>

#### How can the CLI team reproduce the problem?

<%= reproduce %>

<% if (log) { %><details><summary>npm-debug.log:</summary>```<%= log %>```</details><% } %>

### supporting information:

 - `npm -v` prints: <%= npm %>
 - `node -v` prints: <%= node %>
 - `npm config get registry` prints: <%= registry %>
 - Windows, OS X, or Linux?: <%= platform %>
 - Network issues:
   - Geographic location where npm was run:
   - [<% if (network.indexOf('I use a proxy to connect to the npm registry') !== -1) { %>x<% } else { %> <% } %>] I use a proxy to connect to the npm registry.
   - [<% if (network.indexOf('I use a proxy to connect to the web') !== -1) { %>x<% } else { %> <% } %>] I use a proxy to connect to the web.
   - [<% if (network.indexOf('I use a proxy when downloading Git repos') !== -1) { %>x<% } else { %> <% } %>] I use a proxy when downloading Git repos.
   - [<% if (network.indexOf('I access the npm registry via a VPN') !== -1) { %>x<% } else { %> <% } %>] I access the npm registry via a VPN.
   - [<% if (network.indexOf('I don\'t use a proxy, but have limited or unreliable internet access') !== -1) { %>x<% } else { %> <% } %>] I don't use a proxy, but have limited or unreliable internet access.
 - Container:
   - [<% if (network.indexOf('I develop using Vagrant on Windows') !== -1) { %>x<% } else { %> <% } %>] I develop using Vagrant on Windows.
   - [<% if (network.indexOf('I develop using Vagrant on OS X or Linux') !== -1) { %>x<% } else { %> <% } %>] I develop using Vagrant on OS X or Linux.
   - [<% if (network.indexOf('I develop / deploy using Docker') !== -1) { %>x<% } else { %> <% } %>] I develop / deploy using Docker.
   - [<% if (network.indexOf('I deploy to a PaaS (Triton, Heroku)') !== -1) { %>x<% } else { %> <% } %>] I deploy to a PaaS (Triton, Heroku).
