const branch = require('./node-current-branch/get-branch')

const branchName = branch()
console.log(`---
Branch name: ${branchName}
---`)

process.exit(0)
