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
            <SortLink name="description">Description</SortLink>
          </th>
        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.id">
          <td>{{ value.id }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.description }}</td>
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
        { name: "test2", id: 2, description: "test 2 foo bar", icon: "icon" },
        { name: "test1", id: 1, description: "test 1 foo bar", icon: "icon" }
      ]
    };
  }
};
</script>
