export function generatePrompt(code: string): string {
    return `Você é um assistente especialista em TypeScript e testes unitários. Gere testes unitários para o seguinte código usando Jest:
  
  ${code}
  
  Certifique-se de cobrir os principais cenários e adicionar descrições claras aos casos de teste.`;
}