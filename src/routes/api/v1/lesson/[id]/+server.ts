import { error, json } from '@sveltejs/kit'
import { Generator } from '$lib/services/generator.js'
import { env } from '$env/dynamic/private'

export async function GET({ url }) {
  // TODO: Validation with zod

  const word = url.searchParams.get('word')!
  const language = url.searchParams.get('language')!

  const apiKey = env.LLM_API_KEY
  const generator = new Generator(apiKey)
  try {
    const sentence = await generator.generateSentence(language, word)
    return json({ word, language, sentence })
  }
  catch (e: any) {
    return error(500, e.message)
  }
}
