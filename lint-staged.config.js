module.exports = {
  'src/**/*.{js,json,css,md}': [
    'prettier',
    'npx sortier',
    'git add',
    'yarn test:staged',
    'yarn build:react -s',
  ],
}
