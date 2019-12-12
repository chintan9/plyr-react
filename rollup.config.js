import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';



export default {
  input: './src/index.js',
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle',
  },
  plugins: [
    babel({
      exclude: [
        'node_modules/**',
      ],
      babelrc: false,
      presets: [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "false", // "usage" | "entry" | false, defaults to false.
            "corejs": "3.0.0",
            "targets": {
              "esmodules": true,
              "ie": "11"
            }
          }
        ]
      ]
    }),
    resolve(),
    commonjs({
      exclude: 'src/**',
    }),
    uglify(),
    terser()
  ]
}
