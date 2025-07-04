# Auto-Test CLI

Uma ferramenta CLI para geração automática de testes unitários utilizando LLMs (Large Language Models).

## 📋 Descrição

O Auto-Test CLI é uma ferramenta que automatiza a criação de testes unitários para código TypeScript usando inteligência artificial. Ele analisa seu código e gera testes completos seguindo as melhores práticas da Clean Architecture.

## ✨ Funcionalidades

- 🚀 Geração automática de testes unitários
- 📝 Suporte completo ao TypeScript
- 🧪 Integração com framework Vitest
- 🏗️ Seguindo princípios da Clean Architecture
- 🔧 Configurável via variáveis de ambiente
- 📁 Organização automática de arquivos de teste

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Chave da API OpenAI

### Instalação Local

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd auto-test
```

2. Instale as dependências:
```bash
npm install
```

3. Compile o projeto:
```bash
npm run build
```

4. Configure a chave da API OpenAI:
```bash
cp .env.example .env
# Edite o arquivo .env e adicione sua chave da OpenAI
echo "OPENAI_API_KEY=sua_chave_aqui" > .env
```

5. Instale o CLI globalmente:
```bash
npm link
```

## 🚀 Como Usar

### Comando Básico

```bash
auto-test generate -f <caminho-do-arquivo>
```

### Exemplos de Uso

1. **Gerar testes para um arquivo específico:**
```bash
auto-test generate -f src/services/UserService.ts
```

2. **Especificar diretório de saída:**
```bash
auto-test generate -f src/controllers/AuthController.ts -o ./tests/controllers
```

3. **Verificar a versão:**
```bash
auto-test --version
```

4. **Ver ajuda:**
```bash
auto-test --help
```

## 📁 Estrutura de Saída

Os testes são gerados seguindo esta estrutura:

```
projeto/
├── src/
│   └── services/
│       └── UserService.ts
└── tests/
    └── services/
        └── UserService.test.ts
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
OPENAI_API_KEY=sua_chave_da_openai_aqui
```

### Opções do Comando

| Opção | Descrição | Padrão |
|-------|-----------|--------|
| `-f, --file` | Caminho do arquivo TypeScript | **Obrigatório** |
| `-o, --output` | Diretório de saída para os testes | `./tests` |

## 🧪 Framework de Testes

O CLI gera testes otimizados para o framework **Vitest**, incluindo:

- ✅ Testes descritivos e claros
- ✅ Cobertura de fluxos felizes e de erro
- ✅ Mocks e spies quando necessário
- ✅ Seguindo boas práticas da Clean Architecture
- ✅ Testes modulares e bem estruturados

## 📦 Dependências

### Produção
- `commander`: Framework para CLI
- `dotenv`: Gerenciamento de variáveis de ambiente
- `openai`: Cliente da API OpenAI

### Desenvolvimento
- `typescript`: Compilador TypeScript
- `@types/node`: Tipos do Node.js

## 🔧 Scripts Disponíveis

```bash
npm run build    # Compila o projeto TypeScript
npm run start    # Executa o CLI
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Matheus Antonio Flauzino**

## 🐛 Problemas Conhecidos

- Certifique-se de que sua chave da API OpenAI seja válida
- O arquivo de entrada deve ser um arquivo TypeScript válido
- Verifique se você tem permissões de escrita no diretório de saída

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, abra uma issue no repositório do projeto.