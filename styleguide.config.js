const path = require('path')
const glob = require('glob')
const fs = require('fs')
const pkg = require('./package.json')
const webpackConfig = require('./config/webpack.js')

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/Plyr.tsx',
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src'),
  },
  ribbon: {
    url: 'https://github.com/chintan9/plyr-react.git',
    text: 'Fork me on GitHub',
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#065fd4',
      linkHover: '#00adef',
    },
    font: ['Helvetica', 'sans-serif'],
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage:
          'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
      },
      link: {
        backgroundColor: '#065fd4',
      },
    },
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      header: {
        marginBottom: 0,
      },
      tabs: {
        marginBottom: 0,
      },
    },
  },
  webpackConfig,
  getExampleFilename(componentPath) {
    console.log(componentPath)
    return componentPath.replace(/\.(ts|js)x?$/, '.example.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx')
    console.log(name)
    return `import { ${name} } from '${pkg.name}';`
  },
}
