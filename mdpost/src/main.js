// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import M from 'materialize-css'
import _ from 'lodash'
import VueAnalytics from 'vue-analytics' 

require('../node_modules/materialize-css/dist/css/materialize.min.css')
require('../node_modules/material-icons/iconfont/material-icons.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueAnalytics, {
  id: 'UA-128284908-1',
  router
})

