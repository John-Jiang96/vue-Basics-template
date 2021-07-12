import layout from '@/views/layout/layout.vue';
const route = [{
        path: '/demo2',
        component: layout,
        name: 'demo1',
        meta: {
            title: '外部组件'
        },
        children: [{
                path: 'countTo',
                component: () =>
                    import ( /* webpackChunkName: "group-foo" */ './countTo'),
                name: 'countTo',
                meta: {
                    title: '数字滚动'
                },
            },
            {
                path: 'cDraggable',
                component: () =>
                    import ( /* webpackChunkName: "group-foo" */ './cDraggable'),
                name: 'cDraggable',
                meta: {
                    title: '拖拽组件'
                },
            },
            {
                path: 'fuseInput',
                component: () =>
                    import ( /* webpackChunkName: "group-foo" */ './fuseInput'),
                name: 'fuseInput',
                meta: {
                    title: '模糊搜索'
                },
            },
            {
                path: 'fileDownloadZip',
                component: () =>
                    import ( /* webpackChunkName: "group-foo" */ './fileDownloadZip'),
                name: 'fileDownloadZip',
                meta: {
                    title: '下载压缩包'
                },
            },
        ]
    },
    {
        path: '/demo2',
        component: layout,
        name: 'demo1',
        meta: {
            title: '自定义组件'
        },
        children: [{
                path: 'inputForm',
                component: () =>
                    import ( /* webpackChunkName: "group-foo" */ './inputForm'),
                name: 'inputForm',
                meta: {
                    title: '千分位输入框'
                },
            },
            {
                path: 'slotTemplate',
                component: () =>
                    import ( /* webpackChunkName: "group-foo" */ './slotTemplate'),
                name: 'slotTemplate',
                meta: {
                    title: '插槽记录'
                },
            },
        ]
    },
];

route.forEach(item => {
    item.children.forEach(it => {
        it.path = `${item.path}/${it.path}`;
    });
});
export default route;