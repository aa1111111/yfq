// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import dataV from '@jiaminghi/data-view'
// import store from "./store";
import axios from 'axios'
Vue.prototype.$ajax = axios
import echarts from 'echarts'
import 'echarts-liquidfill'
Vue.prototype.$echarts = echarts
import {Carousel, CarouselItem} from 'element-ui'
Vue.use(Carousel)
Vue.use(dataV)
Vue.use(CarouselItem)
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { 
  Icon, Row, Col,  Table, TableColumn, Button, Dialog, Link
} from 'element-ui';
Vue.use(ElementUI, {
  size: "small"
});
if (process.env.NODE_ENV === 'development') {
  const { initMockData } = require('../mock')
  initMockData()
}
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Link)
Vue.config.productionTip = false
ElementUI.Dialog.props.closeOnClickModal.default = false;
new Vue({
  el: "#app",
  router,
  // store,
  render: h => h(App)
}).$mount('#app')