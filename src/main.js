import Vue from "vue";
import _ from "lodash";
import SortedTablePlugin from "./index.js";
import App from "./App.vue";

Vue.prototype.$_ = _;
Vue.use(SortedTablePlugin, {
  ascIcon: "<span> up</span>",
  descIcon: "<span> down</span>"
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
