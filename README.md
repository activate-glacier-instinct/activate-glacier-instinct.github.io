![ci/cd workflow](https://github.com/activate-glacier-instinct/activate-glacier-instinct.github.io/actions/workflows/ci-cd.yml/badge.svg)

# Portfolio site

A simple portfolio to showcase work in web3 and a central location for future blog posts.

## Tech stack

Coming from a few years of doing React, I wanted to do something new and more webby. 

Here come SvelteKit to save the day, a monolith JS framework that is use here to create a statically generated site.

I picked Typescript for type-safety and will mostly stick to native CSS with isolated styling or BEM where necesary.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
