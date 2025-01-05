import OpenAI from 'openai';
import dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env
dotenv.config();

const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY || ''
});

export async function callLLM(prompt: string): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Você é um especialista em testes unitários.' },
        { role: 'user', content: prompt },
      ],
    });
    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Erro ao chamar o LLM:', error);
    throw error;
  }
}