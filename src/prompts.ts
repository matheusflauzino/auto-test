export function generatePrompt(code: string): string {
    return `
      Você é um especialista em testes unitários usando TypeScript com o framework Vitest. 
      Seu objetivo é gerar testes unitários para o seguinte código de forma completa, seguindo as boas práticas da Clean Architecture.

      Regras:
      1. Crie testes com nomes descritivos e claros.
      2. Cubra todos os fluxos relevantes (felizes e de erro).
      3. Utilize mocks e spies apenas quando necessário.
      4. Não reescreva o código original, apenas o arquivo de teste.
      5. Considere que o código está em uma aplicação modular de backend com casos de uso bem definidos.

      Código a ser testado:
      \`\`\`ts
      ${code}
      \`\`\`

      Responda apenas com o conteúdo do arquivo de teste gerado, pronto para ser salvo como um arquivo \`.spec.ts\`.
    `;
}