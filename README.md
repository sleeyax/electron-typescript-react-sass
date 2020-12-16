# electron-typescript-react-sass

## Boilerplate for an Electron application with TypeScript, React and SASS.

[![React](docs/img/react.png)](https://reactjs.org/)
[![Webpack](docs/img/webpack.png)](https://webpack.js.org/)
[![TypeScript](docs/img/ts.png)](https://www.typescriptlang.org/)
[![Electron](docs/img/electron.png)](https://electronjs.org/)
[![Redux](docs/img/redux.png)](https://redux.js.org/)
[![Jest](docs/img/jest.png)](https://facebook.github.io/jest/)
[![SASS](docs/img/sass.png)](https://sass-lang.com/)

## Specs
- [x] React v17
- [x] Webpack v5
- [x] TypeScript v4
- [x] Electron v11
- [x] Redux v4

### Additional Features
- [x] Hot Reload
- [x] Source code protection
- [x] Uses dart-sass instead of node-sass

## Install
Clone the repository with Git:

```bash
git clone --depth=1 git@github.com:Sleeyax/electron-typescript-react-sass.git <your-project-name>
```

And then install the dependencies:

```bash
cd <your-project-name>
npm i
```

## Usage
Start development with hot reloading:
```bash
npm run start-dev
```

## Packaging
We use [Electron builder](https://www.electron.build/) to build and package the application. By default you can run the following to package for your current platform:

```bash
npm run dist
```

This will create a installer for your platform in the `releases` folder.

You can make builds for specific platforms (or multiple platforms) by using the options found [here](https://www.electron.build/cli). E.g. building for all platforms (Windows, Mac, Linux):

```bash
npm run dist -- -mwl
```

## Husky and Prettier
This project comes with both Husky and Prettier setup to ensure a consistent code style. 

To change the code style, you can change the configuration in `.prettierrc`. 

In case you want to get rid of this, you can removing the following from `package.json`:

1. Remove `precommit` from the `scripts` section
1. Remove the `lint-staged` section
1. Remove `lint-staged`, `prettier`, `eslint-config-prettier`, and `husky` from the `devDependencies`

Also remove all mentions of Prettier from the `extends` section in `.eslintrc.json`.

## About this project
This project is an updated fork of [Robin Franken](https://github.com/Robinfr)'s excellent [electron-react-typescript](https://github.com/Robinfr/electron-react-typescript) boilerplate. I removed stuff I think is unnecessary, simplified parts, updated some dependencies and added new ones I'd like to work with in my projects.

License: MIT.
