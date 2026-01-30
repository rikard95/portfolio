# Text

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment

This project is automatically deployed to Vercel when changes are pushed to the `main` branch.

**Live URL:** https://portfolio-rho-one-80.vercel.app/

### Deployment Configuration

- The project uses Vercel for hosting and automatic deployments
- Build configuration is defined in `vercel.json`
- Vercel automatically detects and deploys changes pushed to the `main` branch
- Preview deployments are automatically created for pull requests

### How Deployment Works

1. Push changes to the `main` branch
2. Vercel automatically detects the push via GitHub integration
3. Vercel builds the project using `npm run build`
4. The built application from `dist/text/browser` is deployed to production
5. The deployment is live at the URL above

### Manual Deployment

If you need to deploy manually, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

### First-Time Setup

To connect your Vercel account:
1. Visit [Vercel](https://vercel.com)
2. Import the GitHub repository
3. Vercel will automatically detect the Angular framework and use the configuration from `vercel.json`
4. The project will be deployed automatically

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
