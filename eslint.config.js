import antfu from '@antfu/eslint-config'

export default antfu({
  svelte: true,
  unocss: true,
  rules: {
    curly: ['warn', 'multi-or-nest', 'consistent'],
  },
})
