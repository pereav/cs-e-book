// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vue-material-design-icons/styles.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
export const bus = new Vue();
import Vuex from 'vuex'

Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

const vuetifyOptions = {
	icons: {
    	iconfont: 'md'
	}
}

Vue.use(Vuetify)

Vue.use(Vuex)

new Vue({
	router,
	render: (h) => h(App),
  	vuetify: new Vuetify(vuetifyOptions)
}).$mount('#app')