module.exports = {
  title: 'BUG: Bug Universal Gamecontroller',
  description: 'Introductie tot LoRaWAN aan de hand van een STEM workshop',
  themeConfig: {
    nav: [
      {text: 'Projectwerk 2', link: '/projectwerk2/'},
      {text: 'Controller', link: '/controller/'},
      {text: 'API', link: '/api/'},
      {text: 'Game', link: '/game/'},
      {text: 'VIVES', link: 'https://www.vives.be'}
    ],
    sidebar: [
      {
        title: 'Group 1',   // required
        path: '/projectwerk/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/'
        ]
      },
      // {
      //   title: 'Group 2',
      //   children: [ /* ... */ ]
      // }
    ],
    displayAllHeaders: true,
    sidebar: 'auto',
    repo: 'vives-projectwerk2-2019/BUG-Bug-Universal-Gamecontroller',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page!'
  },
  markdown: {
    lineNumbers: true,

  },
  serviceWorker: true,
}