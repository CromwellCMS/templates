module.exports = {
  headHtml: "<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap\" rel=\"stylesheet\" />",
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
          "id": "home_showcase",
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