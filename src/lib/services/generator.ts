import { ChatOpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'
import { z } from 'zod'

export class Generator {
  private static API_URL = 'https://api.ai71.ai/v1'
  private static MODEL_NAME = 'tiiuae/falcon-180B-chat'

  private apiKey: string
  private llm: ChatOpenAI

  constructor(apiKey: string) {
    this.apiKey = apiKey
    // Disable all non-essential functions from LangChain
    this.llm = new ChatOpenAI({
      apiKey: this.apiKey,
      configuration: {
        baseURL: Generator.API_URL,
      },
      model: Generator.MODEL_NAME,
    })
  }

  async generateSentence(language: string, word: string): Promise<string> {
    const prompt = PromptTemplate.fromTemplate('Write an example sentence in {language} using the word "{word}" (max {maxWordCount} words):')
    const promptWithValues = await prompt.format({ language, word, maxWordCount: 10 })

    const completion = await this.llm.invoke(promptWithValues)

    return completion.content.toString().trim()
  }
}
