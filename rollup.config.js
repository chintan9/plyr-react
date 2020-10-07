import resolve from '@rollup/plugin-node-resolve'
import common from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

import pkg from './package.json'
const extensions = ['.ts', '.tsx', '.js', '.jsx']

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [resolve({ extensions }), common(), babel({ extensions })],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
}
