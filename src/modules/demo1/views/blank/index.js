import layout from 'components/blankLayout/blankLayout.vue'
import blank from './blank-test'
export default {
    path: '/demo1/blank',
    component: layout,
    meta: {
        title: '带左侧菜单的空白页'
    },
    name: 'demo1',
    children: [
        ...blank
    ]
}