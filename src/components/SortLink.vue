<template>
  <a href="#" @click.prevent="sortBy(name)">
    <slot>{{ name }}</slot>
    <slot name="icon">
      <span v-if="getCurrentSort() == name" v-html="getSortIcon()" />
    </slot>
  </a>
</template>

<script>
export default {
  name: "SortLink",
  inject: ["getCurrentSort", "getSortIcon", "sortBy"],
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>
