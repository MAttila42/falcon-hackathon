export function createLocalStorageStore<T>(key: string, initialValue: T) {
  let store: T = $state(
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue)),
  )

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(store))
  })

  return {
    get value() {
      return store
    },
    set value(newValue) {
      store = newValue
    },
  }
}
