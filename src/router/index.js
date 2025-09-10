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
                    name: "Detail",
                    path: "/Detail",
                    component: ()=>import("@/components/Pc/Products/detail.vue"),
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
            path: "/",
            component: Index,
            meta: { title: "Invitations" },
            children: [
                {
                    name: "HFiveHome",
                    path: "/HFiveHome",
                    component: ()=>import("@/components/Hfive/Home/index.vue"),
                    meta: { title: "Invitations" },
                },
                {
                    name: "HFiveProducts",
                    path: "/HFiveProducts",
                    component: ()=>import("@/components/Hfive/Products/index.vue"),
                    meta: { title: "Invitations" },
                },
                {
                    name: "HFiveDetail",
                    path: "/HFiveDetail",
                    component: ()=>import("@/components/Hfive/Products/detail.vue"),
                    meta: { title: "Invitations" },
                },
                {
                    name: "HFiveContact",
                    path: "/HFiveContact",
                    component: ()=>import("@/components/Hfive/Contact/index.vue"),
                    meta: { title: "Contact" },
                },
            ]
        },
    ]
})




export default router