module.exports = {
  'src/**/*.{js,json}': [
    'prettier-eslint --write',
    'npx sortier',
    'eslint',
    'git add',
    'yarn test:staged',
    'yarn build:react -s'
  ],
  'src/**/*.{css,md}': [
    'prettier-eslint --write',
    'npx sortier',
    'git add'
  ]
}
