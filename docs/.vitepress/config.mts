import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// 详细配置参考：https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "",
  description: "Discover, collect, share, completely open source and free",
  base: '/docs-food/', // 站点将部署到的 base URL
  cleanUrls: true, // 简洁的路由
  lastUpdated: true, // 最后更新
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: "HaiTang's OSCG",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '菜单', link: '/markdown-examples' }
    ],
    // 侧边栏
    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '什么是OSCG？', link: '/guide/what-is-oscg' }
        ]
      },
      {
        text: '',
        items: [
          { text: '热门菜', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '调料秘方',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '菜系',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '场景',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '烘焙',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '人群',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '小吃',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '主食',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      },
      {
        text: '外国菜谱',
        items: [
          { text: 'todo1', link: '/guide/popular-dishes' },
          { text: 'todo2', link: '/guide/popular-dishes' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'twitter', link: 'https://x.com' },
      { icon: {
        svg: '<svg t="1714191326580" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3232" width="200" height="200"><path d="M1024.16 694.816c0-149.92-143.104-271.392-319.584-271.392-176.576 0-319.68 121.504-319.68 271.392S528 966.208 704.576 966.208c55.456 0 107.648-12.096 153.184-33.248l125.984 54.528-14.592-140.544c34.784-43.392 55.04-95.808 55.04-152.128zM596.832 621.28c-25.152 0-45.472-20.352-45.472-45.472s20.32-45.472 45.472-45.472c25.12 0 45.44 20.384 45.44 45.472s-20.384 45.472-45.44 45.472z m215.392 0c-25.056 0-45.44-20.352-45.44-45.472s20.384-45.472 45.44-45.472c25.184 0 45.536 20.384 45.536 45.472s-20.352 45.472-45.536 45.472zM704.576 387.488c49.376 0 96.416 8.8 139.264 24.64 0.32-5.728 0.992-11.232 0.992-16.992 0-198.08-189.152-358.624-422.432-358.624C189.184 36.512 0.032 197.024 0.032 395.136c0 74.496 26.816 143.776 72.704 201.12L53.472 781.92l166.432-72.096c41.216 19.2 86.784 32.16 134.88 38.784-3.616-17.504-5.824-35.424-5.824-53.792 0.032-169.44 159.552-307.296 355.616-307.296z m-139.808-209.6c33.184 0 60 26.88 60 60 0 33.184-26.816 60.064-60 60.064s-60.032-26.88-60.032-60.064c0-33.152 26.88-60 60.032-60zM280.032 297.952c-33.184 0-60-26.88-60-60.064 0-33.152 26.848-60 60-60 33.184 0 60.032 26.88 60.032 60s-26.88 60.064-60.032 60.064z" fill="#51C332" p-id="3233"></path></svg>'
      }, link: 'https://weixin.qq.com' },
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // 国际化
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    fr: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
    }
  }
})
