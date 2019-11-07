import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import 'bootstrap'

// vue toast
import Toasted from 'vue-toasted'
Vue.use(Toasted);
Vue.use(Toasted, Option);

// axios
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios);

// font-awesome
import 'font-awesome/css/font-awesome.css'

// UIkit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
UIkit.use(Icons)
Vue.prototype.$uikit = UIkit;

// youtube
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: false })

Vue.config.productionTip = false

Vue.prototype.$api = 'https://cy-cinemas.ml'

Vue.prototype.$url = "http://localhost:80/"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')