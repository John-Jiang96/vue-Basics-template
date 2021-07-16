export default {
    path: '/demo1/blank2',
    component: () =>
        import ( /* webpackChunkName: "group-foo" */ './blank-test'),
    meta: {
        title: '不带左侧菜单的空白页'
    },
    name: 'demo1',
}