<template>
  <form @submit.prevent class="items-view--container">
    <h1>Items</h1>
    <p v-if="itemId">Item ID: {{ itemId }}</p>
    <input type="search" v-model="search" placeholder="Search item" />
  </form>
  <ul>
    <li v-for="item in searchResults" :key="item.id">
      <ItemCard :item="item" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {
  useRouter,
  useRoute
} from "vue-router";
import { useItems } from "@/composables/useItems";
import ItemCard from "@/components/ItemCard.vue";
import { useSearch } from "@/composables/useSearch";
import type { Item } from "@/types/Item";
import { watch, type Ref } from "vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: "",
  },
});

const route = useRoute();
const itemId = route.query?.id;
const router = useRouter();

const { items } = useItems();

type ItemSearch = {
  search: Ref<string>;
  searchResults: Ref<Item[]>;
};

const { search, searchResults }: ItemSearch = useSearch({
  items: items,
  defaultSearch: props.searchTerm,
});

watch(search, (value, prevValue) => {
  if (value === prevValue) return;
  router.replace({ query: { search: value } });
});
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;

}

.items-view--container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>