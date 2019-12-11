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
        globals: {
            'plyr': 'plyr',
        }
    },
     plugins: [
         babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              modules: false,
              useBuiltIns: "usage",
              targets: 'maintained node versions'
            }
          ]
        ]
      }),
        resolve(),
        commonjs(),
        uglify(),
        terser()
    ]
}
