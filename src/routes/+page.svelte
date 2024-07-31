<script lang='ts'>
  import { createClient } from '@supabase/supabase-js'
  import Component from '$lib/components/Component.svelte'
  import { Button } from '$lib/components/ui/button'

  const supabase = createClient('https://bdsmazevljfrfeneymcl.supabase.co', 'public-anon-key')

  let count = $state(0)

  async function signInWithGithub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error)
      console.error('GitHub OAuth error:', error)
  }
</script>

<Button
  onclick={() => signInWithGithub()}
>
  Login with GitHub
</Button>

<Button
  onclick={() => count += 1}
  class='w-fit'
>
  Button {count}
</Button>

<Component name='Bartók' />
<Component name='Béla' />
