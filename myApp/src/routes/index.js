
import Vue from "vue"
import VueRouter from "vue-router"
import main from "../views/main"
import index from "../views/view/index"
import classify from "../views/view/classify"
import cart from "../views/view/cart"
import personal from "../views/view/personal"
import list from "../views/view/list";
import product from "../views/view/product"


Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/main/index'
        },
        {path:"/main",component:main,
            children:[
                {path:"index",component:index},
                {path:"classify",component:classify},
                {path:"cart",component:cart},
                {path:"personal",component:personal},
                {path:"list",component:list},
                {path:"product",component:product},
                {name:"d", path:"/main/product/:id",component:product}
            ]
        },

    ]
})

export default router
