import createVue from '@/main'
import createRouter from '@/router'
import views from './views'
createVue(createRouter(views))