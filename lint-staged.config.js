module.exports = {
  '**/*.+(js|json|less|css|ts|tsx|md)': [
    'prettier',
    'yarn test --findRelatedTests',
    'yarn build:react -s',
    'git add',
  ],
}
