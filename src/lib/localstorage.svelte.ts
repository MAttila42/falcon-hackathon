export function createLocalStorageStore<T>(key: string, initialValue: T) {
  let value: T = $state(
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue)),
  )

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  })

  return {
    get value() {
      return value
    },
    set value(newValue) {
      value = newValue
    },
  }
}
