<script lang='ts'>
  import Component from '$lib/components/Component.svelte'
  import { Button } from '$lib/components/ui/button'

  let count = $state(0)
</script>

<Button
  onclick={() => count += 1}
  class='w-fit'
>
  Button {count}
</Button>

<Component name='Bartók' />
<Component name='Béla' />
