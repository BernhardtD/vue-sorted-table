<template>
  <a href="#" @click.prevent="$parent.sortBy(name)">
    <slot></slot>
    <span
      v-if="$parent.getCurrentSort() == name"
      v-html="$parent.getSortIcon()"
    ></span>
  </a>
</template>

<script>
export default {
  name: "SortLink",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
