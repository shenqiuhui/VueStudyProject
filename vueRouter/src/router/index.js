import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hi1 from "@/components/Hi1";
import Hi2 from "@/components/Hi2";
import Error from "@/components/Error";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: "/home",
            name: "HelloWorld",
            components: {
                default: HelloWorld,
                left: Hi1,
                right: Hi2
            },
            // beforeEnter: (to, from, next) => {
            //     console.log(to);
            //     console.log(from);
            //     console.log('我是beforeEnter钩子');
            //     next();
            // }
        }, {
            path: "/change/:newsId/:newsTitle",
            // name: "HelloWorld",
            components: {
                default: HelloWorld,
                left: Hi2,
                right: Hi1
            },
            alias: '/alias/:newsId/:newsTitle'
        }, {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
});
