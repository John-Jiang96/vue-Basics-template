import layout from '@/views/layout/layout.vue';
import demo1Home from './home';
const route = [{
    path: '/demo1',
    component: layout,
    name: 'demo1',
    children: [{
            path: 'demo1Home',
            component: (r) =>
                require.ensure([], () => r(require('./home'))),
            name: 'demo1Home'
        },
        {
            path: 'echarts',
            component: (r) =>
                require.ensure([], () => r(require('./echarts'))),
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