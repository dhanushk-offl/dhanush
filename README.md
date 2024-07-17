# Developer by Dhanush Kandhan aka Dhanu - `create-svelte`

Welcome to the documentation for building a Svelte project using [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Getting Started

To start creating your Svelte project, follow these steps:

### Creating a Project

If you're here, you might have already completed this step. Congratulations!

```bash
# Create a new project in the current directory
npm create svelte@latest

# Create a new project in a directory named "my-app"
npm create svelte@latest my-app
```

### Developing

After creating your project and installing the necessary dependencies using `npm install`, `pnpm install`, or `yarn`, you can start the development server with:

```bash
npm run dev

# Alternatively, start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building for Production

To generate a production-ready build of your app, run:

```bash
npm run build
```

You can preview the production build using:

```bash
npm run preview
```

> **Note:** To deploy your app, you might need to install an appropriate [adapter](https://kit.svelte.dev/docs/adapters) for your deployment environment.

For projects using Cloudflare, the build directory will be located in `.svelte-kit/cloudflare`. 

Happy coding with Svelte!
