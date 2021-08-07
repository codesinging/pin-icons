module.exports = {
    title: 'PinIcons',
    description: '基于 IconPark 增强的 Vue 图标组件库',
    themeConfig: {
        logo: '/assets/images/logo.svg',
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide'},
            {text: '用法', link: '/usage'},
            {text: '图标', link: '/icons'},
        ],
        lastUpdated: '最后更新',
        repo: 'codesinging/pin-icons',
        repoLabel: 'GitHub',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        smoothScroll: true,
    },
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer')
        ]
    },
    base: '/pin-icons/',
}
