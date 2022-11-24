import Vue from 'vue'
import VueRouter from 'vue-router'


import Index from '@/components/index.vue'


// const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }


Vue.use(VueRouter)

let router = new VueRouter({
    routes: [{
            name: 'index',
            path: '/',
            component: Index
        },
       
        
    ]
})




export default router