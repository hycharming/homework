import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import global from './assets/global.css'
import "./assets/my-icons/iconfont.css"
import infiniteScroll from "vue-infinite-scroll";
import axios from 'axios'

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
    Drawer
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
Vue.use(infiniteScroll);

Vue.prototype.$axios = axios;
// axios.defaults.baseURL = '/api'

new Vue({
  router,
  global,
  render: h => h(App)
}).$mount('#app')
