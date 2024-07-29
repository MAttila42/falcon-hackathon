import type { Tables } from './types'

export const collections = createStore<Tables<'collections'>>([
  { id: 0, created_at: '2024-01-01', from: 'en', to: 'es', name: 'Default', lesson: 1, score: 5 },
  { id: 1, created_at: '2024-01-02', from: 'en', to: 'es', name: 'Collection 1', lesson: 1, score: 5 },
])
export const lessons = createStore<Tables<'lessons'>>([])
export const sentences = createStore<Tables<'sentences'>>([])
export const users = createStore<Tables<'users'>>([])
export const words = createStore<Tables<'words'>>([])

function createStore<T extends { id: number }>(initialValue: T[]) {
  const items = $state<T[]>(initialValue)

  const store = {
    get items() { return items },
    get count() { return items.length },
    get: (id: number) => items.find(item => item.id === id),
    add: (item: T) => items.push(item),
    remove: (id: number) => {
      const index = items.findIndex(item => item.id === id)
      if (index !== -1)
        items.splice(index, 1)
    },
  }

  return store
}
