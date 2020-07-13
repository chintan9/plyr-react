// import babel from 'rollup-plugin-babel'
// import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),
    external({
      includeDependencies: true,
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      declaration: true,
      outDir: 'dist',
    }),
    // babel({
    //   presets: [
    //     'react-app',
    //   ],
    //   plugins: [
    //     '@babel/plugin-proposal-object-rest-spread',
    //     '@babel/plugin-proposal-optional-chaining',
    //     '@babel/plugin-syntax-dynamic-import',
    //     '@babel/plugin-proposal-class-properties',
    //     'transform-react-remove-prop-types',
    //   ],
    //   exclude: 'node_modules/**',
    //   runtimeHelpers: true,
    // }),
    // commonjs(),
    // terser(),
  ],
}
