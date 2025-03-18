Node Boilerplate
Uma estrutura inicial (boilerplate) para projetos Node.js utilizando TypeScript, com suporte a Fastify, ESLint, Prettier, Husky, lint-staged, tsup, tsx e Vitest.

Sumário
Visão Geral
Conteúdo
Começando
Scripts do Projeto
Linting e Formatação
Testes
Dependências
Sobre as Ferramentas
Hooks do Husky
Licença
Visão Geral
Este projeto é um boilerplate simples para iniciar aplicações Node.js com TypeScript. Ele utiliza as seguintes ferramentas e frameworks:

Fastify para o desenvolvimento do servidor.
ESLint e Prettier para garantir qualidade e consistência no código.
Husky e lint-staged para executar scripts antes dos commits.
tsx para executar código TypeScript sem compilação prévia.
tsup para gerar bundles de produção.
Vitest para a execução dos testes.
Conteúdo
Visão Geral
Conteúdo
Começando
Scripts do Projeto
Linting e Formatação
Testes
Dependências
Sobre as Ferramentas
Hooks do Husky
Licença
Começando
Siga os passos abaixo para iniciar o projeto:

Clone o repositório:

bash
Copiar
git clone https://github.com/Yan-pi/NodeBoilerplate.git
Acesse o diretório do projeto:

bash
Copiar
cd nodeboilerplate
Instale as dependências utilizando o pnpm:

bash
Copiar
pnpm install
Inicie o servidor:

bash
Copiar
pnpm start
Scripts do Projeto
No arquivo package.json, os scripts estão configurados da seguinte forma:

start: Inicia o servidor executando o arquivo src/server.ts com o tsx.
dev: Inicia o servidor em modo de desenvolvimento com monitoramento de alterações.
build: Gera o bundle do projeto utilizando o tsup.
husky:prepare: Instala os hooks do Husky.
lint: Executa o ESLint em todos os arquivos do projeto, aplicando correções automáticas.
test: Executa os testes utilizando o Vitest.
test:lint: Executa o ESLint com correções especificamente na pasta src.
Linting e Formatação
O projeto utiliza ESLint e Prettier para manter o código limpo e padronizado.
O Husky está configurado para rodar o lint-staged antes de cada commit.
A configuração do lint-staged no package.json é a seguinte:

json
Copiar
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "pnpm eslint --fix",
    "pnpm prettier --write \"src/**/*.{ts,tsx}\"",
    "pnpm test:lint"
  ]
}
Observação: Certifique-se de que as aspas estejam devidamente escapadas ou adaptadas conforme o seu ambiente, para evitar problemas na execução dos comandos.

Testes
Os testes são realizados utilizando o Vitest.
Para executar os testes, utilize o comando:

bash
Copiar
pnpm test
Dependências
Dependências de Produção
fastify: Framework web para Node.js.
Dependências de Desenvolvimento
@types/node: Definições de TypeScript para Node.js.
@typescript-eslint/eslint-plugin e @typescript-eslint/parser: Suporte ao ESLint para TypeScript.
eslint, eslint-config-prettier e eslint-plugin-prettier: Ferramentas de linting.
globals: Variáveis globais definidas para o ambiente.
husky: Gerenciamento de hooks para Git.
lint-staged: Executa linters em arquivos que estão prestes a ser commitados.
prettier: Formatação de código.
tsup: Bundler para TypeScript.
tsx: Executa TypeScript e ESM sem a necessidade de compilação.
typescript: Suporte à linguagem TypeScript.
vitest: Framework de testes.
wait-port: Utilitário para aguardar portas disponíveis.
Sobre as Ferramentas
TSX: Permite a execução de arquivos TypeScript sem necessidade de compilação prévia, facilitando o desenvolvimento.
TSUP: Bundler de TypeScript sem necessidade de configuração extensa, utilizando o esbuild internamente para otimização.
esbuild: Bundler e minificador JavaScript extremamente rápido, utilizado pelo tsup.
Vitest: Framework de testes moderno, minimalista e com uma sintaxe semelhante ao Jest.
Hooks do Husky
O Husky está configurado para executar um hook pré-commit que roda o lint-staged.
A sequência é a seguinte:

husky:prepare: Instala os hooks do Husky.
lint-staged: Executa os comandos de linting e formatação nos arquivos modificados.
Licença
Este projeto está licenciado sob a licença ISC. Consulte o arquivo LICENSE para mais detalhes.

