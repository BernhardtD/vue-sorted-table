import SortedTable from "./components/SortedTable.vue";
import SortLink from "./components/SortLink.vue";

const plugin = {
  install: (Vue, config) => {
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

SortedTable.install = plugin.install;
export default SortedTable;
