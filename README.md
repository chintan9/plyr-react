## Support
If you like the project and want to support my work, you can buy me a coffee :)

[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/kaihotz)

# Getting started

There are two methods for getting started with this repo.

#### Familiar with Git?

```
  > git clone git@github.com:KaiHotz/react-rollup-boilerplate.git
  > cd react-rollup-boilerplate
  > yarn install
```

#### Not Familiar with Git?
Click [here](https://github.com/KaiHotz/react-rollup-boilerplate/archive/master.zip) to download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
  > yarn install
```


## Developing

To start the developing run :

```
> yarn dev
```

This will build a version of your library, run the watcher and also run the Styleguide.
To open the Styleguide manualy open your Browser and navigate to [http://localhost:6060](http://localhost:6060).
Start developing your components in `src/lib/components` folder and update the `src/lib/index.js` file acordingly.
Always provide an `YourComponent.examples.md` file, so your component will show up in the Styleguide.
You can refer to example `Button` component, but i think you'll get the idea.

### Proposals (Babel)
For smoother development some Babel plugin are included
- [class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
- [object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
- [optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)

## Styling your components

`SCSS` and `CSS` are supported out of the box just import your styles into your component like you normaly would do.
For the use of  `CSS Modules` refere to [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)

## Testing

Testing is done with [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) and [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
You can refer to `Button.test.js` as an example.
```
> yarn test
```
or (for getting coverage)
```
> yarn test:coverage
```


## Linting

Linting is set up through [ESLint](https://eslint.org/) and configured with  [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
You can modify linting rules by overriding them in the `.eslintrc.json` file.

```
> yarn lint
```
or (for for automatic fixing if possible)
```
> yarn lint:fix
```

## Publishing your library to NPM

To release your library to NPM or your private Registry, make sure you have an active account at [NPM](https://www.npmjs.com/), your `.npmrc` file is correctly setup and the repository url in `package.json` file is set to your repoitory url, then:

```
> yarn release
```

## Styleguide

For custom layouts, styleing and more information about the Styleguide please refer to [React Styleguidist](https://react-styleguidist.js.org/) documentation.

#### Deploy the Styleguide to GitHub Pages
Make sure the repository url in `package.json` file is set to your repoitory url, then:

```
> yarn deploy
```

## Scripts

- `yarn dev` : Executes the develop mode, running watcher and the Stylguide, rebuilding your library on every change.
- `yarn start` : Only serves the Styleguide.
- `yarn build` : Builds your library  (build can be faound in `dist` folder).
- `yarn styleguide:build` : Builds the static Styleguide in case you want to deploy it.
- `yarn test` : Runs the tests.
- `yarn test:coverage`: Runs the test and shows the coverage.
- `yarn lint` : Runs the linter.
- `yarn lint:fix` : Runs the linter and fixes automatic fixable issues.
- `yarn release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `yarn deploy`: Deploys the Styleguide to GitHub Pages.


## Resources

### Bundler
- [Rollup.js](https://rollupjs.org/guide/en)

### Styleguide
- [React Styleguidist](https://react-styleguidist.js.org/)

### Testing
- [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

### Linting
- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

### Compiler
- [Babel 7](https://babeljs.io/)
