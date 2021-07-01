import createVue from '@/main'
import createRouter from '@/router'
import views from './views'
createVue(createRouter(views))

Vue.$registerFilter({
    entity: [{
            name: "ceshi",
            entity: (value) => {
                console.log(value);
                return '手动怎么加过滤器';
            },
        },
        {
            name: "ceshi2",
            entity: () => {
                return '手动怎么加过滤器2';
            },
        },
    ],
});