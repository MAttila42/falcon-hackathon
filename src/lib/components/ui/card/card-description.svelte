<script lang='ts'>
  // @ts-nocheck
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '$lib/utils.js.js'

  type $$Props = HTMLAttributes<HTMLParagraphElement>

  let className: $$Props['class']
  export { className as class }
</script>

<p class={cn('text-muted-foreground text-sm', className)} {...$$restProps}>
  <slot />
</p>
