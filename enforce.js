const branch = require('./node-current-branch/get-branch')

console.log('---\nGit branch: ' + branch() + '\n---')
process.exit(0)
