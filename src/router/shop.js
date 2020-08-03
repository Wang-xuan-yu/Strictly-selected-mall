//自定义新路由文件
import Home from "@/views/home";
import Index from "@/views/home/index";
import Category from "@/views/home/category";
import Cart from "@/views/home/cart";
import Me from "@/views/home/me";

import Search from '@/components/search/search'
import Fenlxq from "@/components/search/fenlxq"
export default [
    {
        path: "/",
        name: "/",
        component: Home,
        redirect: "/index",
        children: [
            {
                path: "/category",
                name: "category",
                component: Category,
                meta: {
                    title: "严选商城-分类"
                }
            }, {
                path: "/index",
                name: "index",
                component: Index,
                meta: {
                    title: "严选商城-首页"
                }
            }, {
                path: "/cart",
                name: "cart",
                component: Cart,
                meta: {
                    title: "严选商城-购物车"
                }
            }, {
                path: "/me",
                name: "me",
                component: Me,
                meta: {
                    title: "严选商城-个人中心"
                }
            }
        ]
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
        meta: {
            title: "严选商城-搜索"
        }
    },
    {
        path: "/Fenlxq/:id",
        name: "Fenlxq",
        component: Fenlxq,
        meta: {
          title: "严选商城-分类详情"
        }
      },
];