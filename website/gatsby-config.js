module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'SVGR · SVG To React Component',
        slug: 'svgr',
        author: 'Greg Bergé',
        description: '免费、在线工具把 SVG 转化为 React 组件，更多好用开发者工具尽在开发者工具箱',
        siteUrl: 'https://svgr.devtool.tech',
        github: 'https://github.com/gregberge/svgr',
        menu: ['About', 'Usage', 'Configuring SVGR', 'Advanced'],
        nav: [
          { title: '开发者工具箱', url: 'https://devtool.tech' },
          // { title: 'Usage', url: '/docs/getting-started/' },
        ],
        // carbonAdUrl:
        //   '//cdn.carbonads.com/carbon.js?serve=CE7I5K3N&placement=react-svgrcom',
        googleAnalytics: 'UA-102193749-5',
        // algoliaDocSearch: {
        //   apiKey: '0c7343afd83c189413499c62c1df6853',
        //   indexName: 'smooth-code-svgr',
        // },
      },
    },
  ],
}
