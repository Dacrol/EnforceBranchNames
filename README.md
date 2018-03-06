Enforces Git branch names according to the [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model.

Usage:

```bash
$ yarn add -D enforce-gitflow-branches husky@next
or
$ npm install --save-dev enforce-gitflow-branches husky@next
```

Then set up [Husky](https://www.npmjs.com/package/husky) and set a hook:

```json
"husky": {
  "hooks": {
    "pre-push": "enforce-gitflow-branches"
  }
}
```

This script checks the current branch name and exits the Node process with exit code 0 if it is valid (see [source](https://github.com/Dacrol/EnforceBranchNames/blob/master/enforce.js)). If the branch name is invalid it exits with exit code 1, which causes Husky to prevent the action from completing.

To write custom controls create a file with:

```javascript
// enforce.js
const enforce = require('enforce-gitflow-branches')
enforce()

// ...other tests
```

To add custom branch names in your custom controls, use [node-current-branch](https://www.npmjs.com/package/node-current-branch) to access the current branch name. 

Finally set up [Husky](https://www.npmjs.com/package/husky) and set a hook:

```json
"husky": {
  "hooks": {
    "pre-push": "node enforce.js"
  }
}
```

