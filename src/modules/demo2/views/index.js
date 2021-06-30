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
    ]
}];

route.forEach(item => {
    item.children.forEach(it => {
        it.path = `${item.path}/${it.path}`;
    });
});
export default route;