// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import axios from 'axios';
import App from "./App";
import router from "./router";
import store from "./store";

import {
    Row,
    Col,
    Tabs,
    TabPane,
    Table,
    TableColumn,
    Button
} from 'element-ui';

import '@/css/index.css';
import '@/css/font/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});
