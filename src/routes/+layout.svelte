<script>
  import '@unocss/reset/tailwind.css'
  import 'virtual:uno.css'

</script>

<div class='mt-5 h-screen w-screen flex flex-col items-center gap-10 bg-background text-foreground'>
  <nav class='flex gap-4'>
    <h1 class='text-lg font-bold'>Hi Bob</h1>
    <a href='/'>Home</a>
    <a href='/learn'>Learn</a>
    <a href='/settings'>Settings</a>
  </nav>

  <main class='flex flex-col gap-5'>
    <slot />
  </main>
</div>
