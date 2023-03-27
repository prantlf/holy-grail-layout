import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { minify } from 'rollup-plugin-swc-minify'
import sourcemaps from 'rollup-plugin-sourcemaps'
import style from 'bacom/tools/style/rollup'
import templ from 'bacom/tools/templ/rollup'

export default [
  {
    input: 'src/index.ts',
    output: [{
      file: 'dist/index.min.js', format: 'iife', sourcemap: true
    }],
    plugins: [
      resolve(), style({ minify: true }), templ({ minify: true }),
      typescript(), sourcemaps(), minify()
    ]
  }
]
