import login from './login';
import demo1 from './demo1';
import demo2 from './demo2';
import menus from './menus';
export default {
    global: {
        ...login
    },
    menus: {
        ...menus
    },
    other: {
        ...demo1,
        ...demo2,

    }
};