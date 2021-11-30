module.exports = {
  generalSidebar: {
    'Getting started': [
      'getting-started/intro',
      'getting-started/get-involved',
      'getting-started/matrix',
    ],
    'Repositories': [
      'repositories/overview',
      'repositories/data-loading-repos',
      'repositories/data-loading-pipeline',
      'repositories/graph-processing-repos',
      'repositories/application-repos',
      'repositories/infrastructure-repos',
    ],
    'Developer Resources': [
      'developers/conventions',
      'developers/dev-tools'
    ],
    'Infrastructure': [
      'infrastructure/status',
      'infrastructure/servers',
    ],
    'Use Cases': [
      'use-cases/research',
      'use-cases/healthcare',
      'use-cases/policy',
      'use-cases/patent-search',
      'use-cases/media',
    ],
  },
  applicationSidebar: {
      'Applications': [
      'applications/visual-graph-explorer',
      'applications/semspect',
      'applications/bloom',
      'applications/react',
    ]
  },
  ...require("./docs/api/sidebar-schema"),
};
