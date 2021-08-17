import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import global from './assets/global.css'
import "./assets/my-icons/iconfont.css"
import infiniteScroll from "vue-infinite-scroll";
// import axios from 'axios'
// import axios from './service/http'
import VueLazyload from 'vue-lazyload'

import './assets/main.scss'

import {
    Main,
    Header,
    Container,
    Aside,
    Menu,
    MenuItem,
    MenuItemGroup,
    Card,
    ButtonGroup,
    Input,
    Tag,
    Popover,
    Tabs,
    TabPane,
    Dialog,
    Drawer,
    Loading,
    Empty
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Main),
Vue.use(Header),
Vue.use(Container),
Vue.use(Aside),
Vue.use(Menu),
Vue.use(MenuItem),  
Vue.use(MenuItemGroup)
Vue.use(Card),
Vue.use(ButtonGroup),
Vue.use(Input),
Vue.use(Tag)
Vue.use(Popover),
Vue.use(Tabs),
Vue.use(TabPane),
Vue.use(Dialog),
Vue.use(Drawer)
Vue.use(Empty)
Vue.use(Loading.directive)
Vue.use(infiniteScroll);


// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = '/api'


// Vue.use(VueLazyload)
// 配置项
Vue.use(VueLazyload, {
  preLoad: 1,
  // error: '/',
  // loading:'./assets/my-icons/pic.png',
  attempt: 1
})

new Vue({
  router,
  global,
  render: h => h(App)
}).$mount('#app')
