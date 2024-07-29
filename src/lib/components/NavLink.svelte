<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { page } from '$app/stores'

  const {
    href,
    children,
  }: {
    href: string
    children: Snippet
  } = $props()
</script>

<a {href} class={$page.url.pathname === href ? 'underline' : ''}>
  {@render children()}
</a>
