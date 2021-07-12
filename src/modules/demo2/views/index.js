import layout from '@/views/layout/layout.vue';
const route = [{
    path: '/demo2',
    component: layout,
    name: 'demo1',
    children: [{
            path: 'demo2Home',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './home'),
            name: 'demo2Home'
        },
        {
            path: 'inputForm',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './inputForm'),
            name: 'inputForm'
        },
        {
            path: 'countTo',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './countTo'),
            name: 'countTo'
        },
        {
            path: 'cDraggable',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './cDraggable'),
            name: 'cDraggable'
        },
        {
            path: 'slotTemplate',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './slotTemplate'),
            name: 'slotTemplate'
        },
        {
            path: 'fuseInput',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './fuseInput'),
            name: 'fuseInput'
        },
        {
            path: 'fileDownloadZip',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './fileDownloadZip'),
            name: 'fileDownloadZip'
        },
    ]
}];

route.forEach(item => {
    item.children.forEach(it => {
        it.path = `${item.path}/${it.path}`;
    });
});
export default route;