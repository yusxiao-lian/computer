import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/components/index.vue'
// pc
const pcIndex = () => import("../components/Pc/index.vue");
// h5
const hfiveIndex = () => import("../components/Hfive/index.vue");

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index,
            children: []
        },
        // pc
        {
            name: "pcIndex",
            path: "/",
            component: Index,
            meta: { title: "Invitations" },
            children: [
                {
                    name: "Home",
                    path: "/Home",
                    component: ()=>import("@/components/Pc/Home/index.vue"),
                        meta: { title: "Invitations" },
                },
                {
                    name: "Products",
                    path: "/Products",
                    component: ()=>import("@/components/Pc/Products/index.vue"),
                    meta: { title: "Invitations" },
                },
                {
                    name: "Contact",
                    path: "/Contact",
                    component: ()=>import("@/components/Pc/Contact/index.vue"),
                    meta: { title: "Contact" },
                },
             ]
        },
         // h5
        {
            name: "hfiveIndex",
            path: "hfiveIndex",
            component: hfiveIndex,
            meta: { title: "Index" },
            children: []
        },
    ]
})




export default router