import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// 详细配置参考：https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "",
  description: "Discover, collect, share, completely open source and free",
  base: '/docs-food/', // 站点将部署到的 base URL
  cleanUrls: true, // 简洁的路由
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: "HaiTang's cooking guide",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
