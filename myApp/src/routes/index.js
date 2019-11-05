
import Vue from "vue"
import VueRouter from "vue-router"
import main from "../views/main"
import index from "../views/footer/index"
import classify from "../views/footer/classify"
import cart from "../views/footer/cart"
import personal from "../views/footer/personal"


Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/main'
        },
        {path:"/main",component:main,
            children:[
                {path:"",component:index},
                {path:"classify",component:classify},
                {path:"cart",component:cart},
                {path:"personal",component:personal}
            ]

        },
    ]
})

export default router
