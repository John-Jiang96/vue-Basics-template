export default [{
    path: '',
    component: () =>
        import ( /* webpackChunkName: "group-foo" */ './blank.vue'),
    meta: {
        title: '带左侧菜单的空白页'
    },
    name: 'demo1'
}]