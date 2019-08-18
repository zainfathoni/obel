module.exports = {
  'src/**/*.{js,json,css,md}': [
    'prettier-eslint --write',
    'npx sortier',
    'eslint',
    'git add',
    'yarn test:staged',
    'yarn build:react -s'
  ]
}
