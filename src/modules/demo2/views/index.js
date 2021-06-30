import layout from '@/views/layout/layout.vue';
import demo2Home from './home';
const route = [{
    path: '/demo2',
    component: layout,
    name: 'demo1',
    children: [{
            path: 'demo2Home',
            component: () =>
                import ('./home'),
            name: 'demo2Home'
        },
        {
            path: 'inputForm',
            component: () =>
                import ('./inputForm'),
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