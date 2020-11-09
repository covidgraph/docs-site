# Covid Graph Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/31a99f8b-c0a9-43cb-9df4-b46811d118c2/deploy-status)](https://app.netlify.com/sites/covid-graph-docs/deploys)

Public documentation of the Covid Graph Project.

View master branch deployment at: [https://covid-graph-docs.netlify.app/](https://covid-graph-docs.netlify.app/)

Built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Development

### Initialise project:

```console
npm install
```

### Generate GraphQL schema docs

This command auto generates the GraphQL schema pages. The pages are required to be generated before running the app otherwise 'broken link' errors with be given.

```console
npx docusaurus graphql-to-doc -f
```

### Local development server

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```console
npm run start
```

### Build

This command generates static content into the `build` directory and can be served using any static contents hosting service. It will also generate the GraplQL schema pages.

Recommended to run this before pushing changes as errors can occur here that don't occur in the local dev environment.

```console
npm run build
```

### Deployment

The project is auto built and deployed to Netlify on each push.

## Project Management

Kanban board here: [https://github.com/covidgraph/docs-site/projects/1](https://github.com/covidgraph/docs-site/projects/1)