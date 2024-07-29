<script lang='ts'>
  // @ts-nocheck
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '$lib/utils.js.js'

  type $$Props = HTMLAttributes<HTMLTableSectionElement>

  let className: $$Props['class']
  export { className as class }
</script>

<tbody class={cn('[&_tr:last-child]:border-0', className)} {...$$restProps}>
  <slot />
</tbody>
