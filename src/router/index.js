import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import content from '@/components/content'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path:'/content',
            component:content
        }
    ]
})
