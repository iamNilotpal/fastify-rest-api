This project was bootstrapped with [Vite](https://vitejs.dev).

## Tools Used:

- **Vite Bundler:** Vite, a faster and more efficient bundling tool. Vite offers
  faster development server startup, hot module replacement, and optimized build
  performance.

- **Vitest:** Vitest, a modern test runner that offers improved performance and
  additional features. Vitest provides faster test execution, enhanced test
  parallelization, and improved debugging capabilities.

- **TypeScript Configuration:** The TypeScript Strict mode enforces stricter
  type checking rules and helps identify potential errors and inconsistencies at
  compile-time, leading to more robust and reliable code.

- **Added alias for quick imports:** An alias was added to the project
  configuration, allowing developers to use shorter import paths for commonly
  used modules or directories. This helps improve code readability and reduces
  the effort required for imports.

- **Node version 18.16.0:** The Node.js version that will be used for
  development is version `18.16.0`. This upgrade provides access to the latest
  Node.js features, performance improvements, security patches, and bug fixes.

- **Added Husky for pre-commit hooks:** Husky, a popular Git hooks tool, was
  added to the project. Specifically, pre-commit hooks were configured to run
  specific tasks or checks before each commit. This ensures that code committed
  to the repository meets certain quality standards, such as passing tests,
  linting rules, or other validations.

- **Added ESLint for linting and Prettier for better formatting of files:**
  ESLint, a widely used JavaScript linter, was introduced to the development
  environment. ESLint helps enforce coding style and identifies potential issues
  or code smells. Additionally, Prettier, a code formatter, was integrated to
  automatically format code according to a predefined style guide, ensuring
  consistent code formatting across the project.

These updates collectively aim to improve the development experience, increase
code quality, and align the project with modern tooling and best practices.
While the migration process may require initial effort, the long-term benefits
in terms of performance, reliability, and maintainability make it a worthwhile
investment for the success of the software development endeavor.

## Running the Application locally

**First clone the repository by running this command:**

**`SSH COMMAND`**

**`HTTPS`**

```bash
  git clone https://github.com/techvariable/clinify_frontend_v2.git
```

**Update Node Version**

Check to see if you have node version `v18.16.0` or later installed. If you
have, you are ready to go to the next level. If not, go to the
[Node.JS Official Website](https://nodejs.org/en) and download the LTS version,
or use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage and
install multiple node versions. After installation, use `node -v` to check your
node version and ensure you have the most recent version (18.16.0) chosen.

**Installing Dependencies**

```bash
  yarn install
```

## Available Scripts

In the project directory, you can run:

```bash
  npm run dev
```

Runs the app in the development mode
[http://localhost:3001](http://localhost:3001)

```bash
  npm run build
```

Builds the app for production to the **`dist`** folder.

## Update your .env file

```bash
  APP_PORT=
  APP_HOST=
  NODE_ENV=
  DATABASE_URL=
```
