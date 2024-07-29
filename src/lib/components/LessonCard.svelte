<script lang='ts'>
  import { redirect } from '@sveltejs/kit'
  import * as Card from '$lib/components/ui/card/index'
  import type { Tables } from '$lib/types'

  const {
    collection,
  }: {
    collection?: Tables<'collections'>
  } = $props()

  function handleClick() {
    if (collection)
      redirect(302, `/learn/${collection.id}`)
    else
      redirect(302, '/learn/new')
  }
</script>

<Card.Root
  class={`w-60 cursor-pointer transition border-2 hover:(border-foreground border-solid) ${collection ? '' : 'border-dashed'}`}
  onclick={handleClick}
>
  <Card.Header class='flex flex-row items-center justify-between'>
    <div class='flex flex-col gap-2'>
      <Card.Title>
        {collection ? collection.name : 'New Collection'}
      </Card.Title>
      <Card.Description>
        1/100 lessons
      </Card.Description>
    </div>
    {#if !collection}
      <span class='i-solar:add-circle-linear size-6'></span>
    {/if}
  </Card.Header>
</Card.Root>
