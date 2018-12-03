# vue-sorted-table
![MIT](https://img.shields.io/github/license/BernhardtD/vue-sorted-table.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/vue-sorted-table.svg?style=flat-square)](https://www.npmjs.com/package/vue-sorted-table)

A basic sorted table for Vue.js

## Installation
Install with NPM:

```bash
npm install --save vue-sorted-table
```

Import globally in app:

```javascript
import SortedTablePlugin from "vue-sorted-table";

Vue.use(SortedTablePlugin);
```

## Examples
### Basic
The basic example shows how to use the `SortedTable` and `SortLink` components:
```html
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
```

```javascript
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
´´´

[![Edit vue-sorted-table - basic example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xp37xr4pwo?module=%2Fsrc%2FApp.vue)

### Advanced
The advanced example shows how to use the plugin configuration to set global sort icons:

```javascript
Vue.use(SortedTablePlugin, {
  ascIcon: '<i class="material-icons">arrow_drop_up</i>',
  descIcon: '<i class="material-icons">arrow_drop_down</i>'
});
´´´

[![Edit vue-sorted-table - advanced example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/71v099zz56)

### Nested values
By default, the objects containing the values has to be a flat object.
To support nested objects (`{ name: "Plugin Foo", user: { id: 1, name: "David Campbell" } }`) the plugin
uses [lodash](https://lodash.com).

At first, import and register lodash prototype:
```javascript
import _ from "lodash";

Vue.prototype.$_ = _;
```

Add sort link using the nested key:
```html
<SortLink name="user.name">Username</SortLink>
```

[![Edit vue-sorted-table - nested example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6nljqn2q8r)

## Configuration
The plugin configuration allows to set global sort icons, e.g. [Advanced Example](#Advanced)

Option   | Description
---------|----------------------
ascIcon  | Ascending sort icon.
descIcon | Descending sort icon.

## Components
### `SortedTable`
The `SortedTable` is the main component of the plugin. It is intended to be a replacement of the `<table></table>` tag. So instead using the old table tags, use `<sorted-table></sorted-table>`.

#### Properties
This component has the following properties:

Property | Required | Default | Description
---------|----------|---------|--------------------------------------------------------------
values   |yes       |null     |Array of objects containing the values which should be sorted.
dir      |no        |"asc"    |Sort direction. Valid values: ("asc"\|"desc")
sort     |no        |"id"     |Default sorting. Could be any valid object key.
ascIcon  |no        |""       |Ascending icon. Overwrites default or globally set icon.
descIcon |no        |""       |Descending icon. Overwrites default or globally set icon.

### `SortLink`
This component adds a link to sort the given values. A sort icon is attached automatically to link.

#### Properties
This component has the following properties:

Property | Required | Default | Description
---------|----------|---------|-------------------------------------------------------
name     |yes       |""       |The object key name on which the values will be sorted.

### Constraint
