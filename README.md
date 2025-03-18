# nodeboilerplate

**Version:** 1.0.0  
**Author:** henriqueteixeiradev  
**License:** ISC  
**Description:** Boilerplate para iniciar um projeto Node.js  

## 📦 Gerenciador de Pacotes
Este projeto utiliza **pnpm** na versão `9.15.3`.

## 🚀 Scripts

- **`start`**: `tsx src/server.ts`
- **`dev`**: `tsx watch src/server.ts`
- **`build`**: `tsup src`
- **`husky:prepare`**: `husky install`
- **`lint`**: `eslint . --fix`
- **`test`**: `vitest`
- **`test:lint`**: `eslint src/**/*.ts --fix`

## 🎯 Husky e Lint-Staged

**Husky Hooks:**
- `pre-commit`: Executa `lint-staged`.

**Lint-Staged Configuração:**
- `*.{js,jsx,ts,tsx}`:
  - `pnpm eslint --fix`
  - `pnpm prettier --write "src/**/*.{ts,tsx}"`
  - `pnpm test:lint`

## 📂 Dependências

### 🔧 Desenvolvimento

- `@commitlint/cli` `^19.8.0`
- `@commitlint/config-conventional` `^19.8.0`
- `@types/node` `^22.13.10`
- `@typescript-eslint/eslint-plugin` `^8.26.1`
- `@typescript-eslint/parser` `^8.26.1`
- `eslint` `^9.22.0`
- `eslint-config-prettier` `^10.1.1`
- `eslint-plugin-prettier` `^5.2.3`
- `globals` `^16.0.0`
- `husky` `^9.1.7`
- `lint-staged` `^15.5.0`
- `prettier` `^3.5.3`
- `tsup` `^8.4.0`
- `tsx` `^4.19.3`
- `typescript` `^5.8.2`
- `vitest` `^3.0.9`
- `wait-port` `^1.1.0`

### 📌 Produção

- `fastify` `^5.2.1`
