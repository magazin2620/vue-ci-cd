import { ref } from 'vue'
import { describe, it, expect } from 'vitest'
import { useSearch } from '@/composables/useSearch'

const items = ref([
  {
    id: "1",
    title: "Item 1",
  },
  {
    id: "2",
    title: "Item 2",
  }
])

const result = [items.value[0]]

describe('useSearch', () => {
  it('should return search results', () => {
    const { search, searchResults } = useSearch({ items, filter: 'title' })
    search.value = items.value[0].title
    expect(searchResults.value).toEqual(result)
  })
})