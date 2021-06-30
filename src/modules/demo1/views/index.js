import layout from '@/views/layout/layout.vue';
const route = [{
    path: '/demo1',
    component: layout,
    name: 'demo1',
    children: [{
            path: 'demo1Home',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './home'),
            name: 'demo1Home'
        },
        {
            path: 'echarts',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ './echarts'),
            name: 'echarts'
        }
    ]
}, ];

route.forEach(item => {
    item.children.forEach(it => {
        it.path = `${item.path}/${it.path}`;
    });
});
export default route;