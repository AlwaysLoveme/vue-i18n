// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import zh from './../static/lang/zh'
import en from './../static/lang/en'
import tw from './../static/lang/zhCHT'
import En from 'iview/dist/locale/en-US'
import Zh from 'iview/dist/locale/zh-CN'
import Tw from 'iview/dist/locale/zh-TW'
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueI18n)
Vue.locale = () => {}
const i18n = new VueI18n({
  locale: window.localStorage.getItem('language') === null ? 'zh' : window.localStorage.getItem('language'), // 语言标识
  messages: {
    'zh': Object.assign(zh, Zh), // 简体中文
    'en': Object.assign(en, En), // 英文
    'tw': Object.assign(tw, Tw) // 繁体中文
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
