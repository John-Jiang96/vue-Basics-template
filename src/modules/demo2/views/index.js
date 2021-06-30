import layout from '@/views/layout/layout.vue';
import demo2Home from './home';
const route = [{
    path: '/demo2',
    component: layout,
    name: 'demo1',
    children: [{
        path: 'demo2Home',
        component: demo2Home,
        name: 'demo2Home'
    }, ]
}];

route.forEach(item => {
    item.children.forEach(it => {
        it.path = `${item.path}/${it.path}`;
    });
});
export default route;