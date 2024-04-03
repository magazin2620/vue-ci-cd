<template>
  <article class="item-wrapper">
    <p>{{ item.title }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Item } from "@/types/Item";
import type { PropType } from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});
</script>

<style scoped>
.item-wrapper {
  width: 300px;
  border: 1px solid #ccc;
  padding: 0 1rem;
}
</style>