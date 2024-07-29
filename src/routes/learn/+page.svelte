<script lang='ts'>
  import LessonCard from '$lib/components/LessonCard.svelte'
  import { collections } from '$lib/store.svelte'
</script>

<div class='w-full flex flex-col items-center gap-5'>
  Collections
  <div class='flex flex-wrap items-center justify-center gap-5 px-5'>
    {#each collections.items as collection (collection.id)}
      <LessonCard {collection} />
    {/each}
    <LessonCard />
  </div>
</div>
