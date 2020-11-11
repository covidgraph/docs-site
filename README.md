# Covid Graph Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/31a99f8b-c0a9-43cb-9df4-b46811d118c2/deploy-status)](https://app.netlify.com/sites/covid-graph-docs/deploys)

Public documentation of the Covid Graph Project.

View master branch deployment at: [https://covid-graph-docs.netlify.app/](https://covid-graph-docs.netlify.app/)

Built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Development

Local instances will be served at [http://localhost:3000/](http://localhost:3000/) by default.

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

This command generates static content into the `build` directory and can be served using any static contents hosting service. It will also generate the GraphQL schema pages.

Recommended to run this before pushing changes as errors can occur here that don't occur in the local dev environment.

```console
npm run build
```

Note: because of the hundreds of generated pages from the GraphQL schema, node can run out of memory on the build stage, to increase available memory whilst building you can run:

```console
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

Serve the static build with:

```console
npm run serve
```

### Deployment

The project is auto built and deployed to Netlify on each push.

## Docker

We have two Dockerfile's one for development (with hot load etc) and one for production.

### Development

Changes to the package dependencies will require a rebuild. Changes to the GraphQL schema will require a restart. Changes to everything else should be hot loaded.

```console
docker build -f Dockerfile-dev -t cgdocs-dev .
docker run -v $(pwd):/data/app -p 3000:3000 cgdocs-dev
```

### Production

Any change will require a full rebuild.

```console
docker build -t cgdocs-prod .
docker run -p 3000:3000 cgdocs-prod
```

## Project Management

Kanban board here: [https://github.com/covidgraph/docs-site/projects/1](https://github.com/covidgraph/docs-site/projects/1)