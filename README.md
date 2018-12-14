# Ojek Belanja 🏍 [![CircleCI](https://circleci.com/gh/zainfathoni/obel.svg?style=shield&circle-token=1000aed8de1cb706801f05d5e9b1dc368bf13a46)](https://circleci.com/gh/zainfathoni/obel) [![codecov](https://codecov.io/gh/zainfathoni/obel/branch/master/graph/badge.svg?token=KBOL05Mq5P)](https://codecov.io/gh/zainfathoni/obel)

## Available Scripts

In the project's root directory, you can run:

### Installation

1. Make sure [yarn](https://yarnpkg.com) is installed in your local machine.
2. Clone this project and run `yarn` in the project's root directory.

### Development

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn storybook`

Launches [Storybook](https://storybook.js.org/) for isolated component rendering.
Try it yourself! You will be amazed!

Just run it when you want to develop your components in isolation, so you can have a full control over the props and get immediate result of the components' rendering and action calls.

### Building

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn build:storybook`

Builds the Storybook into a standalone application in the `storybook-static` folder.

#### `yarn serve`

Serves the built assets from the `yarn:build` command above.

### Testing

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn test:coverage`

Generates the tests coverage in the project.
After running it, open the `index.html` file under the `coverage/lcov-report/` folder to see the visual representation of the code coverage.

#### `yarn test:e2e:run`

Builds the app, serves it, then run Cypress for end-to-end testing with the Headless Chrome.

#### `yarn test:e2e:dev`

Start the app in development mode,then run Cypress for end-to-end testing with the Chrome Browser.
You can use it to get to certain states in the application, as a substitution for the absence of Hot Module Reloading in Create React App.

#### `yarn validate`

Runs `test:coverage` and `test:e2e:run` in parallel to validate the project's correctness in the Continuous Integration process.

### Formatting

#### `yarn format`

Manually triggers Prettier format towards all `js`, `json`, & `css` files.
By default it has to be run automatically on save in your IDE (for Visual Studio Code users, the configurations are already included in this project).

It also will be run each time before you commit (pre-commit hook).
This way, we can prevent unformatted file to be committed to the repository.

## Contributing

### Git Commits Signing

## License

© Copyright 2018-2019 Zain Fathoni, all rights reserved.
For more information, see the LICENSE file in this directory.
