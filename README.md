# plyr-react
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Installation

This plugin requires minimum **Node.js with npm or yarn**.

```sh
# with npm
npm i plyr-react plyr

# with yarn
yarn add plyr-react plyr
```

## Usage

```tsx
import Plyr from 'plyr-react'
import 'plyr/dist/plyr.css'

export default function App() {
  return (
    <Plyr
      source={
        {
          /* ... */
        }
      }
      options={
        {
          /* ... */
        }
      }
    />
  )
}
```

> Note: You will need mark `source` as a type of `any` until a new release of Plyr is available.

## Example

Click
[here](https://stackblitz.com/edit/react-vfptdd?ctl=1&embed=1&file=index.js&hideExplorer=1&hideNavigation=1&view=preview)
to see example and you can play with
[this](https://stackblitz.com/edit/react-vfptdd?file=index.js) example.

## Contribute

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/chintan9/plyr-react)
[![Join the package community on Pika](https://img.shields.io/badge/Pika%20Community-Ask%20questions,%20get%20answers-blue?style=flag-square)](https://www.pika.dev/npm/plyr-react)
[![BCH compliance](https://bettercodehub.com/edge/badge/chintan9/plyr-react?branch=master)](https://bettercodehub.com/)
[![Size](https://badgen.net/bundlephobia/minzip/plyr-react)](https://badgen.net/#bundlephobia)

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
accordingly. Always provide an `YourComponent.examples.md` file, so your
component will show up in the Styleguide. You can refer to example
`Plyr` component, but i think you'll get the idea.

##### Proposals (Babel)

For smoother development some Babel plugin are included

- [class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
- [object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
- [optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)

##### Styling your components

`SCSS` and `CSS` are supported out of the box just import your styles into your
component like you normally would do. For the use of `CSS Modules` refer to
[rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)

##### Testing

Testing is done with [Jest](https://facebook.github.io/jest/),
[Enzyme](http://airbnb.io/enzyme/) and
[Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers) You can refer
to `Plyr.test.js` as an example.

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
setup and the repository url in `package.json` file is set to your repository
url, then:

```
> npm run release
```

##### Styleguide

For custom layouts, styling and more information about the Styleguide please
refer to [React Styleguidist](https://react-styleguidist.js.org/) documentation.

##### Deploy the Styleguide to GitHub Pages

Make sure the repository url in `package.json` file is set to your repository
url, then:

```
> npm run deploy
```

##### Scripts

- `npm run dev` : Executes the develop mode, running watcher and the Styleguide,
  rebuilding your library on every change.
- `npm run start` : Only serves the Styleguide.
- `npm run build` : Builds your library (build can be found in `dist` folder).
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

If you like the project and want to support my work, give star or fork it.

## Thanks 

- [@iwatakeshi](https://github.com/iwatakeshi) For provide help for convert to typescript. 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/moh3ni"><img src="https://avatars0.githubusercontent.com/u/12123530?v=4" width="100px;" alt=""/><br /><sub><b>Zia</b></sub></a><br /><a href="https://github.com/chintan9/plyr-react/issues?q=author%3Amoh3ni" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!