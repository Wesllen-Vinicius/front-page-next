<div align="center">
  <p>Next.js + Tailwind CSS + TypeScript.</p>
  <p>VersΓ£o 0.1.0</p>
</div>

## Features

This repository is π battery packed with:

- β‘οΈ Next.js 12
- βοΈ React 17
- β¨ TypeScript
- π¨ Tailwind CSS 3 β Configured with CSS Variables to extend the **primary** color
- π Pre-built Components β Components that will **automatically adapt** with your brand color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
- π Jest β Configured for unit testing
- π Absolute Import and Path Alias β Import components using `@/` prefix
- π ESLint β Find and fix problems in your code, also will **auto sort** your imports
- π Prettier β Format your code consistently
- πΆ Husky & Lint Staged β Run scripts on your staged files before they are committed
- π€ Conventional Commit Lint β Make sure you & your teammates follow conventional commit
- β° Standard Version Changelog β Generate your changelog using `yarn release`
- π· Github Actions β Lint your code on PR
- π Automatic Branch and Issue Autolink β Branch will be automatically created on issue **assign**, and auto linked on PR
- π₯ Snippets β A collection of useful snippets
- π Default Open Graph β Awesome open graph generated using [og.thcl.dev](https://github.com/theodorusclarence/og), fork it and deploy!
- πΊ Site Map β Automatically generate sitemap.xml
- π¦ Expansion Pack β Easily install common libraries, additional components, and configs

## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too π

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter project-name
   ```

3. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.
