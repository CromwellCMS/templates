module.exports = {
  /** Settings to initialize on Plugin install */
  defaultSettings: {
    someProp: 'Default value from cromwell.config.js'
  },
  rollupConfig: () => {
    const commonjs = require('@rollup/plugin-commonjs');
    const typescript = require('rollup-plugin-ts-compiler');
    const { terser } = require('rollup-plugin-terser');
    return {
      main: {
        plugins: [
          typescript(),
          commonjs(),
          terser({
            compress: {
              side_effects: false,
              negate_iife: false,
            }
          }),
        ]
      },
      backend: {
        plugins: [
          typescript({
            compilerOptions: {
              target: 'ES2019'
            }
          }),
          commonjs(),
        ]
      },
    }
  }
}