import fs from 'fs';
import path from 'path';
import { generatePrompt } from './prompts';
import { callLLM } from './utils';

export async function generateTests(filePath: string, outputPath: string) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    const prompt = generatePrompt(code);

    console.log('Gerando testes com LLM...');
    const testCode = await callLLM(prompt);

    const outputFilePath = path.join(outputPath, path.basename(filePath).replace('.ts', '.test.ts'));
    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(outputFilePath, testCode, 'utf-8');

    console.log(`Testes gerados com sucesso em: ${outputFilePath}`);
  } catch (error) {
    console.error('Erro ao gerar testes:', error);
  }
}