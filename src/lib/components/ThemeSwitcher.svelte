<script context='module' lang='ts'>
  export const themes = [
    'zinc',
    'slate',
    'stone',
    'gray',
    'neutral',
    'red',
    'rose',
    'orange',
    'green',
    'blue',
    'yellow',
    'violet',
  ] as const

  export type Theme = typeof themes[number]
</script>

<script lang='ts'>
  import { Button } from './ui/button'
  import { createLocalStorageStore } from '$lib/localstorage.svelte'

  const store = createLocalStorageStore<Theme>('theme', 'neutral')

  function handleThemeChange(theme: Theme) {
    document.body.classList.remove(`theme-${store.value}`)
    document.body.classList.add(`theme-${theme}`)
    store.value = theme
  }
</script>

<div class='space-y-4'>
  <p>Theme</p>
  <div class='grid grid-cols-6 gap-2'>
    {#each themes as theme}
      <Button
        class='w-20'
        on:click={() => handleThemeChange(theme)}
        variant={theme === store.value ? 'default' : 'secondary'}
      >
        {theme}
      </Button>
    {/each}
  </div>
</div>
