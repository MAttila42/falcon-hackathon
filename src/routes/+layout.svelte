<script>
  import '@unocss/reset/tailwind.css'
  import 'virtual:uno.css'

</script>

<div class='h-screen w-screen flex flex-col items-center justify-center gap-10 bg-primary/90 text-primary-foreground'>
  <nav class='flex gap-4'>
    <h1 class='text-lg font-bold'>Hi Bob</h1>
    <a href='/'>Home</a>
    <a href='/settings'>Settings</a>
  </nav>

  <main class='flex flex-col gap-5'>
    <slot />
  </main>
</div>
