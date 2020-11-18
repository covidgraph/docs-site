module.exports = {
  someSidebar: {
    'Getting started': [
      'getting-started/intro',
      'getting-started/communication',
      'getting-started/neo4j',
      'getting-started/graphql',
      'getting-started/data-sources',
    ],
    'Repositories': [
      'repositories/repositories',
    ],
    'DB Schema & API': [
      'api/schema',
      {'Papers' : [
        'api/objects/paper',
        'api/objects/author-collection',
        'api/objects/author',
        'api/objects/affiliation',
        'api/objects/location',
        'api/objects/reference-collection',
        'api/objects/reference',
        'api/objects/citation',
        'api/objects/body-text',
        'api/objects/abstract',
      ]},
      {'BioMedical' : [
        'api/objects/gene-symbol',
        'api/objects/gene',
      ]}
    ],
    'Tools & Apps': [
      'tools/pipeline',
      'tools/visual-graph-explorer',
      'tools/stuctr-app'
    ]
  },
  ...require("./docs/api/sidebar-schema"),
};
