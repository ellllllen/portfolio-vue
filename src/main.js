import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";

import moment from "moment";

Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
