module.exports = {
  rollupConfig: () => {
    const commonjs = require('@rollup/plugin-commonjs');
    const json = require('@rollup/plugin-json');
    const postcss = require('rollup-plugin-postcss');
    const { terser } = require('rollup-plugin-terser');
    const typescript = require('rollup-plugin-ts-compiler');
    const tsSharedState = {};

    const getDefaultPlugins = () => [
      typescript({
        sharedState: tsSharedState,
        monorepo: true,
      }),
      commonjs(),
      json(),
    ];

    return {
      main: {
        plugins: [
          ...getDefaultPlugins(),
        ]
      },
      adminPanel: {
        plugins: [
          ...getDefaultPlugins(),
          terser({
            compress: {
              side_effects: false,
              negate_iife: false,
            }
          }),
          postcss({
            extract: false,
            modules: true,
            writeDefinitions: false,
            inject: true,
            use: ['sass'],
          }),
        ]
      },
    }
  },
  defaultPages: {
    index: 'index',
    category: 'category/[slug]',
    product: 'product/[slug]',
    post: 'blog/[slug]',
    tag: 'tag/[slug]',
    pages: 'pages/[slug]',
    account: 'account',
    checkout: 'checkout',
  },
  pages: [
    {
      id: "index",
      route: "index",
      name: "Home",
      title: "Home page",
      modifications: [
        {
          "type": "plugin",
          "id": "main_showcase",
          "plugin": {
            "pluginName": "@cromwell/plugin-product-showcase"
          }
        }
      ]
    },
  ],
  globalModifications: [
    {
      "type": "plugin",
      "id": "header_main_menu",
      "plugin": {
        "pluginName": "@cromwell/plugin-main-menu"
      }
    }
  ]
};