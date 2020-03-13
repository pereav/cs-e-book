// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

const vuetifyOptions = {
	icons: {
    	iconfont: 'md'
	}
}

Vue.use(Vuetify)

new Vue({
	router,
	render: (h) => h(App),
  	vuetify: new Vuetify(vuetifyOptions)
}).$mount('#app')