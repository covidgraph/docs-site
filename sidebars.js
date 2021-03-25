module.exports = {
  generalSidebar: {
    'Getting started': [
      'getting-started/intro',
      'getting-started/get-involved',
      'getting-started/matrix',
      'developers/conventions',
    ],
    'Repositories': [
      'repositories/overview',
      'repositories/data-loading-repos',
      'repositories/data-loading-pipeline',
      'repositories/application-repos',
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
      'applications/react',
      'applications/stuctr-app'
    ]
  },
  ...require("./docs/api/sidebar-schema"),
};
