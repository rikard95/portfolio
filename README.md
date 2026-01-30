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
- GitHub Actions workflow (`.github/workflows/deploy.yml`) handles automated deployments
- Production deployments are triggered on push to `main` branch
- Preview deployments are created for pull requests

### Manual Deployment

If you need to deploy manually, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

Note: You'll need to configure Vercel secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) in your GitHub repository settings for automated deployments to work.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
