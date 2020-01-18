# plyr-react

## Example

Click
[here](https://stackblitz.com/edit/react-uq98gq?ctl=1&embed=1&file=index.js&hideExplorer=1&hideNavigation=1&view=preview)
to see example and you can play with
[this](https://stackblitz.com/edit/react-uq98gq) example.

## Contibute 

[![Join the package community on Pika](https://img.shields.io/badge/Pika%20Community-Ask%20questions,%20get%20answers-blue?style=flag-square)](https://www.pika.dev/npm/plyr-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/chintan9/plyr-react?branch=master)](https://bettercodehub.com/)
[![Size](https://badgen.net/bundlephobia/minzip/plyr-react@0.9.1)]

### Getting started for Development

There are two methods for getting started with this repo.

#### Familiar with Git?

```
  > git clone git@github.com:chintan9/plyr-react.git
  > cd plyr-react
  > npm run install
```

#### Not Familiar with Git?

Click [here](https://github.com/chintan9/plyr-react.git/archive/master.zip) to
download the .zip file. Extract the contents of the zip file, then open your
terminal, change to the project directory, and:

```
  > npm run install
```

#### Developing

To start the developing run :

```
> npm run dev
```

This will build a version of your library, run the watcher and also run the
Styleguide. To open the Styleguide manualy open your Browser and navigate to
[http://localhost:6060](http://localhost:6060). Start developing your components
in `src/lib/components` folder and update the `src/lib/index.js` file
acordingly. Always provide an `YourComponent.examples.md` file, so your
component will show up in the Styleguide. You can refer to example
`PlyrComponent` component, but i think you'll get the idea.

##### Proposals (Babel)

For smoother development some Babel plugin are included

- [class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
- [object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
- [optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)

##### Styling your components

`SCSS` and `CSS` are supported out of the box just import your styles into your
component like you normaly would do. For the use of `CSS Modules` refere to
[rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)

##### Testing

Testing is done with [Jest](https://facebook.github.io/jest/),
[Enzyme](http://airbnb.io/enzyme/) and
[Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers) You can refer
to `PlyrComponent.test.js` as an example.

```
> npm run test
```

or (for getting coverage)

```
> npm run test:coverage
```

##### Linting

Linting is set up through [ESLint](https://eslint.org/) and configured with
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) You
can modify linting rules by overriding them in the `.eslintrc.json` file.

```
> npm run lint
```

or (for for automatic fixing if possible)

```
> npm run lint:fix
```

##### Publishing your library to NPM

To release your library to NPM or your private Registry, make sure you have an
active account at [NPM](https://www.npmjs.com/), your `.npmrc` file is correctly
setup and the repository url in `package.json` file is set to your repoitory
url, then:

```
> npm run release
```

##### Styleguide

For custom layouts, styleing and more information about the Styleguide please
refer to [React Styleguidist](https://react-styleguidist.js.org/) documentation.

##### Deploy the Styleguide to GitHub Pages

Make sure the repository url in `package.json` file is set to your repoitory
url, then:

```
> npm run deploy
```

##### Scripts

- `npm run dev` : Executes the develop mode, running watcher and the Stylguide,
  rebuilding your library on every change.
- `npm run start` : Only serves the Styleguide.
- `npm run build` : Builds your library (build can be faound in `dist` folder).
- `npm run styleguide:build` : Builds the static Styleguide in case you want to
  deploy it.
- `npm run test` : Runs the tests.
- `npm run test:coverage`: Runs the test and shows the coverage.
- `npm run lint` : Runs the linter.
- `npm run lint:fix` : Runs the linter and fixes automatic fixable issues.
- `npm run release` : Publishes your Library on NPM or your private Registry
  (depending on your config in your `.npmrc` file).
- `npm run deploy`: Deploys the Styleguide to GitHub Pages.

### Resources

#### Bundler

- [Rollup.js](https://rollupjs.org/guide/en)

#### Styleguide

- [React Styleguidist](https://react-styleguidist.js.org/)

#### Testing

- [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

#### Linting

- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

#### Compiler

- [Babel 7](https://babeljs.io/)

## Support

If you like the project and want to support my work, you can buy me a coffee :)
