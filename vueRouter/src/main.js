// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log('我是beforeEach钩子');
    next();
});
// router.beforeResolve((to, form, next) => {
//     console.log('我是beforeResolve钩子');
//     next();
// });
// router.afterEach((to, from) => {
//     console.log('我是agterEach钩子');
// });
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});
