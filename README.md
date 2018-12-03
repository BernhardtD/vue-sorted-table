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
<iframe src="https://codesandbox.io/embed/vqvo42n173" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Advanced

### Nested values

### Components

## Configuration
// plugin configuration to set icons
// usage of lodash

## Components
### `SortedTable`
The `SortedTable` is the main component of the plugin. It is intended to be a replacement of the `<table></table>` tag. So instead using the old table tags, use `<sorted-table></sorted-table>`.
#### Properties
This component has the following properties:
|Property|Required|Default|Description|
|--------|---|-----|--|
|values  |yes|null |Array of values which should be sorted.|
|dir     |no |"asc"|Sort direction. Valid values: ("asc"\|"desc") |
|sort    |no |"id" |Default sorting. Could be any valid object key.|
|ascIcon |no |""   |Ascending icon. Overwrites default or globally set icon.|
|descIcon|no |""   |Descending icon. Overwrites default or globally set icon.|

### `SortLink`
This component adds a link to sort the given values. A sort icon is attached automatically to link.
#### Properties
This component has the following properties:
|Property|Required|Default|Description|
|--------|---|-----|--|
|name  |yes|"" |The object key name on which the values will be sorted.|

### Constraint
