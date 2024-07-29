<script>
  import '@unocss/reset/tailwind.css'
  import 'virtual:uno.css'
  import '@fontsource-variable/league-spartan'
  import NavLink from '$lib/components/NavLink.svelte'
</script>

<div class='w-full'>
  <div class='w-full flex flex-col items-center gap-10 pt-5 text-lg'>
    <nav class='flex items-center gap-5'>
      <h1 class='text-2xl font-bold'>Yuo</h1>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/learn'>Learn</NavLink>
      <NavLink href='/lessons'>Lessons</NavLink>
      <NavLink href='/settings'>Settings</NavLink>
    </nav>
    <main class='w-full flex flex-col items-center gap-5'>
      <slot />
    </main>
  </div>
</div>
