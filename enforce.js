const branch = require('./node-current-branch/get-branch')

const branchName = branch()

if (
  branchName.startsWith('feature/') ||
  branchName.startsWith('release/') ||
  branchName.startsWith('hotfix/') ||
  branchName === 'master' ||
  branchName === 'develop' ||
  branchName.startsWith('experimental')
) {
  console.log(
    `---
Branch name: \x1b[36m%s\x1b[0m (Valid)
---`,
    branchName
  )
  process.exit(0)
} else {
  console.log(
    `---
Branch name: \x1b[31m%s\x1b[0m (Invalid)
---`,
    branchName
  )
  process.exit(1)
}

// \x1b[31m%s\x1b[0m - Red
// \x1b[34m%s\x1b[0m - Blue
// \x1b[36m%s\x1b[0m - Cyan
