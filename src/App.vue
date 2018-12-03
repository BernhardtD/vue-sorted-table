<template>
  <div id="app">
    <SortedTable :values="values">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="id">ID</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="hits">Hits</SortLink>
          </th>
        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.id">
          <td>{{ value.id }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.hits }}</td>
        </tr>
      </tbody>
    </SortedTable>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      values: [
        { name: "Plugin Foo", id: 2, hits: 33 },
        { name: "Plugin Bar", id: 1, hits: 42 },
        { name: "Plugin Foo Bar", id: 3, hits: 79 }
      ]
    };
  }
};
</script>
