const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Plyr React',
    description:
      'A simple HTML5, YouTube and Vimeo player for react using plyr',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/workspace/plyr-react/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Plyr React',
        description:
          'A simple HTML5, YouTube and Vimeo player for react using plyr',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/workspace/plyr-react',
          templates:
            '/workspace/plyr-react/node_modules/docz-core/dist/templates',
          docz: '/workspace/plyr-react/.docz',
          cache: '/workspace/plyr-react/.docz/.cache',
          app: '/workspace/plyr-react/.docz/app',
          appPackageJson: '/workspace/plyr-react/package.json',
          appTsConfig: '/workspace/plyr-react/tsconfig.json',
          gatsbyConfig: '/workspace/plyr-react/gatsby-config.js',
          gatsbyBrowser: '/workspace/plyr-react/gatsby-browser.js',
          gatsbyNode: '/workspace/plyr-react/gatsby-node.js',
          gatsbySSR: '/workspace/plyr-react/gatsby-ssr.js',
          importsJs: '/workspace/plyr-react/.docz/app/imports.js',
          rootJs: '/workspace/plyr-react/.docz/app/root.jsx',
          indexJs: '/workspace/plyr-react/.docz/app/index.jsx',
          indexHtml: '/workspace/plyr-react/.docz/app/index.html',
          db: '/workspace/plyr-react/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
