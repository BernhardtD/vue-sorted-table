import Vue from "vue";
import App from "./App.vue";
import _ from "lodash";
import SortedTable from "./plugin";

Vue.prototype.$_ = _;
Vue.use(SortedTable, {
  ascIcon: "<span> up</span>",
  descIcon: "<span> down</span>"
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
