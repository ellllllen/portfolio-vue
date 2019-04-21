import Vue from "vue";
import App from "./app.vue";
import router from "./router";

import moment from "moment";

Vue.config.productionTip = false;
Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
