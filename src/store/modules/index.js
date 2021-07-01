import login from './login';
import demo1 from './demo1';
import demo2 from './demo2';

export default {
    global: {
        ...login
    },
    other: {
        ...demo1,
        ...demo2,
    }
};