import { promises as fs } from 'fs';
import * as path from 'path';
import { generatePrompt } from './prompts';
import { callLLM } from './utils';

function extractTestCode(llmResponse: string): string {
  // Procura por blocos de código entre ```
  const codeBlockRegex = /```(?:typescript|ts|javascript|js)?\n([\s\S]*?)```/;
  const match = llmResponse.match(codeBlockRegex);
  
  if (match && match[1]) {
    return match[1].trim();
  }
  
  // Se não encontrar blocos de código, retorna a resposta limpa
  return llmResponse.trim();
}

export async function generateTests(filePath: string, outputPath: string): Promise<void> {
  try {
    const code = await fs.readFile(filePath, 'utf-8');
    const prompt = generatePrompt(code);

    console.log('Gerando testes com LLM...');
    const llmResponse = await callLLM(prompt);
    
    // Extrai apenas o código de teste da resposta
    const testCode = extractTestCode(llmResponse);

    const outputFilePath = path.join(outputPath, path.basename(filePath).replace(/\.(ts|js)$/, '.test.$1'));
    await fs.mkdir(outputPath, { recursive: true });
    await fs.writeFile(outputFilePath, testCode, 'utf-8');

    console.log(`Testes gerados com sucesso em: ${outputFilePath}`);
  } catch (error) {
    console.error('Erro ao gerar testes:', error);
    throw error;
  }
}