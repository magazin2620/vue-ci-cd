import type { Item } from "@/types/Item";
import { ref, type Ref } from "vue";

export function useItems(): { items: Ref<Item[]> } {
  return {
    items: ref([
      {
        id: "1",
        title: "Item 1",
      },
      {
        id: "2",
        title: "Item 2",
      },
      {
        id: "3",
        title: "Item 3",
      }

    ]),
  };
}