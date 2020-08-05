//自定义新路由文件
import Home from "@/views/home";
import Index from "@/views/home/index";
import Category from "@/views/home/category";
import Cart from "@/views/home/cart";
import Me from "@/views/home/me";

import Search from '@/components/search/search'
import Fenlxq from "@/components/search/fenlxq"
import GoodsInfo from "@/components/details/goodsInfo"

import Login from "@/views/login/login";

import Special from "@/views/article/special";
import articleDetail from "@/views/article/detail";

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
      {
        path: "/goodsInfo/:id",
        name: "GoodsInfo",
        component: GoodsInfo,
        meta: {
          title: "严选商城-商品详情页面"
        }
      },
      {
    path: "/shop/login",
    name: "shop_login",
    component: Login,

    meta: {
      title: "严选商城-登陆"
    }
  },
  {
    path: "/special",
    name: "Special",
    component: Special,
    meta: {
      title: "严选商城-严选专栏"
    }
  },
  {
    path: "/detail/:id",
    name: "article",
    component: articleDetail,
    meta: {
      title: "严选商城-文章详情"
    }
  },
];