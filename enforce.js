const stdin = process.openStdin();
let content = '';

stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {
  console.info(`Input: ${content}`);
});

console.log('---\nGit Params: ' + process.env.GIT_PARAMS + '\n---')
process.exit(0)
