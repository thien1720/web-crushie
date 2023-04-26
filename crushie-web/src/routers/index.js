import Home from "~/page/Home"
import Service from "~/page/Services"
import Product from "~/page/Product"
import SizeChat from "~/page/Sizechat"
import DetailSize from "~/page/DetailSize"
import Abouts from "~/page/AboutUs"
import Payment from "~/page/Payment"
import ShowIteam from "~/page/ShowIteam"
import Cart from "~/page/Cart"
import InfoOrder from "~/page/InfoOrder"

//publick router
const publickRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path:"/:shops/:id",
        component:ShowIteam
    }
    ,
    {
        path: '/shops',
        component: Product
    },
    {
        path: '/sizeChat',
        component: SizeChat,
        naviteams:{
            pathnav :'detailSize',
            navComponent: DetailSize
        }
    },
    {
        path: '/abouts',
        component: Abouts,
    },

    {
        path: '/service',
        component: Service
    }, 
    {
        path:"/payment",
        component: Payment
    },
    {
        path: "/cart",
        component : Cart
    },
    {
        path:"/info-order",
        component: InfoOrder,
        layout: null,
    }
    
    
]

const privateRouter = [

]

export { publickRoutes, privateRouter }