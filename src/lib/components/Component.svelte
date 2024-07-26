<script lang='ts'>
  import { Switch } from '$lib/components/ui/switch'

  const {
    name,
  }: {
    name: string
  } = $props()

  let toggle = $state(false)
</script>
<div class='w-50 flex flex-row items-center justify-between rounded-xl bg-muted/20 px-5 py-5'>
  <p class={`font-bold text-lg ${toggle ? 'op-100' : 'op-40'}`}>{name}</p>
  <Switch onCheckedChange={() => toggle = !toggle} />
</div>
