<script lang='ts'>
  // @ts-nocheck
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '$lib/utils.js.js'

  type $$Props = HTMLAttributes<HTMLDivElement>

  let className: $$Props['class']
  export { className as class }
</script>

<div
  class={cn('bg-card text-card-foreground rounded-lg border shadow-sm', className)}
  {...$$restProps}
>
  <slot />
</div>
