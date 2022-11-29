import {defaultTheme} from '@vuepress/theme-default'

export default {
    lang: 'zh-CN',
    title: '知识总结',
    description: '开始',
    theme: defaultTheme({
        // 导航
        navbar: [
            {
                text: 'java',
                collapsible: true,
                children: [
                    {
                        text: 'spring',
                        children: ['/java/spring/index.md']
                    },
                    {
                        text: '基础',
                        children: ['/java/base/index.md']
                    }
                ]
            },
        ],
        // 侧边栏
        sidebar: {
            '/java/spring': [
                {
                    text: 'spring体系',
                    children: ['/java/spring/RefreshScope原理.md', '/java/spring/springBoot.md']
                }
            ],
            '/java/base': [
                {
                    text: 'java基础',
                    children: ['/java/base/编程规范.md']
                }
            ]
        }
    }),
}
