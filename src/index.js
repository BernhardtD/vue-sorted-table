import SortedTable from "./components/SortedTable.vue";
import SortLink from "./components/SortLink.vue";

const SortedTablePlugin = {
  install: function(Vue, config) {
    Vue.component(SortedTable.name, SortedTable);
    Vue.component(SortLink.name, SortLink);

    if (config) {
      Vue.prototype.$sortedTable = config;
    } else {
      Vue.prototype.$sortedTable = {
        ascIcon: "<span> ▲</span>",
        descIcon: "<span> ▼</span>"
      };
    }
  }
};

//Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(SortedTablePlugin);
}

export default SortedTablePlugin;
export { SortedTable, SortLink };
