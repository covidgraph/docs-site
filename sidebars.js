module.exports = {
  someSidebar: {
    'Getting started': [
      'getting-started/intro', 
      'getting-started/neo4j', 
      'getting-started/graphql',
      'getting-started/data-sources'
    ],
    'API': [
      'api/schema',
      'api/objects/gene',
    ],
    'Tools & Apps': [
      'tools/pipeline',
      'tools/visual-graph-explorer',
      'tools/stuctr-app'
    ]
  },
  ...require("./docs/api/sidebar-schema"),
};
