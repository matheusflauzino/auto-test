#!/usr/bin/env node

import { Command } from 'commander';
import { generateTests } from './generator';

const program = new Command();

program
  .name('auto-test')
  .description('CLI para gerar testes unitários automaticamente usando LLMs')
  .version('1.0.0');

program
  .command('generate')
  .description('Gerar testes unitários para um arquivo')
  .requiredOption('-f, --file <filePath>', 'Caminho do arquivo TypeScript para gerar testes')
  .option('-o, --output <outputPath>', 'Diretório de saída para salvar os testes', './tests')
  .action(async (options) => {
    const { file, output } = options;
    await generateTests(file, output);
  });

program.parse(process.argv);
