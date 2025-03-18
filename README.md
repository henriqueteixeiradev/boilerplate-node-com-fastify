Node Boilerplate
Overview
This is a simple Node.js boilerplate project with TypeScript ( tsx + tsup ), Express, ESLint, Prettier, Husky + Lint-staged, and Vitest

Table of Contents
Node Boilerplate
Overview
Table of Contents
Getting Started
Scripts
Linting and Formatting
Testing
Dependencies
About TSX, TSUP, and esbuild
Husky and Hooks Sequence
License
Getting Started
Clone this repository: git clone https://github.com/Yan-pi/NodeBoilerplate.git
Navigate to the project directory: cd nodeboilerplate
Install dependencies: yarn install
Start the server: yarn start
Scripts
start: Start the server using tsx src/server.ts.
build: Build the project using tsup src.
start:dev: Start the server in development mode using tsx watch src/server.ts.
husky:prepare: Install Husky hooks.
test: Run tests using Vitest.
test:lint: Run linting tests using Vitest.
Linting and Formatting
Linting and formatting are enforced using ESLint and Prettier. Husky is set up to run lint-staged before each commit.

Lint-staged configuration:

"_.{js,jsx,ts,tsx}": [
"yarn eslint --fix",
"yarn prettier --write \"src/\*\*/_.{ts,tsx}\"",
"yarn test:lint --passWithNoTests"
]
Testing
Testing is done using Vitest. Run tests with yarn test.

Dependencies
@types/express: TypeScript definitions for Express.
@types/node: TypeScript definitions for Node.js.
@typescript-eslint/eslint-plugin: ESLint plugin for TypeScript.
@typescript-eslint/parser: TypeScript parser for ESLint.
eslint: ESLint for linting.
eslint-config-prettier: ESLint config for Prettier.
express: Web framework for Node.js.
husky: Git hooks made easy.
lint-staged: Run linters on pre-committed files.
prettier: Opinionated code formatter.
tsup: Zero-config TypeScript bundler.
tsx: CLI command for seamlessly running TypeScript & ESM in both CommonJS & module package types.
typescript: TypeScript language support.
vitest: Modern and minimalist JavaScript test framework.
About TSX, TSUP, and esbuild
TSX CLI (tsx): TSX is a CLI command for seamlessly running TypeScript & ESM in both CommonJS & module package types. It provides a hassle-free way to execute TypeScript code without dealing with extensive configuration.

TSUP: TSUP is a zero-config TypeScript bundler. It simplifies the process of bundling TypeScript files for the browser. It provides a fast and minimalistic approach to create bundles for deployment.

esbuild: esbuild is a fast JavaScript bundler and minifier. TSUP uses esbuild under the hood for efficient bundling of TypeScript code.

Husky and Hooks Sequence
Husky is configured with a pre-commit hook that runs lint-staged before each commit. The sequence of hooks is as follows:

husky:prepare: Install Husky hooks.
lint-staged: Run lint-staged, which performs linting and formatting on pre-committed files.
License
This project is licensed under the MIT License - see the LICENSE file for details
