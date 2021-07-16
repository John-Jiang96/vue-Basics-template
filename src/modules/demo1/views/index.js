import blank from './blank'
import blank2 from './blank2'
const route = [
    blank,
    blank2
];
route.forEach(item => {
    item.children && item.children.forEach(it => {
        it.path = `${item.path}/${it.path}`;
    });
});
export default route;