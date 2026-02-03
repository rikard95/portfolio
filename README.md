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

- The project uses Vercel's native GitHub integration for automatic deployments
- Build configuration is defined in `vercel.json`
- GitHub Actions workflow (`.github/workflows/ci.yml`) runs CI checks (build + test)
- Production deployments are automatically triggered by Vercel on push to `main` branch
- Preview deployments are automatically created for pull requests
- **No tokens or GitHub secrets required** - deployments handled by Vercel's GitHub integration

### Manual Deployment

If you need to deploy manually, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

For detailed deployment setup instructions, see `SETUP.md`.

## Troubleshooting

If you experience issues with styles not loading after switching branches, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common solutions.

**Quick fix:** After switching branches, always run:
```bash
npm install
npm start
```

Then hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R).

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
