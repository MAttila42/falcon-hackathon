<script lang='ts'>
  // @ts-nocheck
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '$lib/utils.js.js'

  type $$Props = HTMLAttributes<HTMLTableCaptionElement>

  let className: $$Props['class']
  export { className as class }
</script>

<caption class={cn('text-muted-foreground mt-4 text-sm', className)} {...$$restProps}>
  <slot />
</caption>
