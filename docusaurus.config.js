module.exports = {
  title: 'HealthECCO',
  tagline: 'Connecting the docs for better research',
  url: 'https://covid-graph-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'HealthECCO', // Usually your GitHub org/user name.
  projectName: 'CovidGraph', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HealthECCO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/he_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Developers',
          position: 'left',
        },
        {
          to: 'docs/visual-graph-explorer',
          activeBasePath: 'docs',
          label: 'Applications',
          position: 'left',
        },
        {
          to: 'docs/api/schema',
          activeBasePath: 'docs',
          label: 'Schema',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://healthecco.org/',
          label: 'HealthECCO Website',
          position: 'right',
        },
        {
          href: 'https://github.com/covidgraph',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/covidgraph/about/',
            },
            {
              label: 'Matrix',
              href: '/docs/matrix',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/covidgraph',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HealthEcco Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/covidgraph/docs-site/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://healthecco.org',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "@edno/docusaurus2-graphql-doc-generator",
      {
        schema: "https://covid-graph-graphql.now.sh/",
        rootPath: "./docs",
        linkRoot: "/docs/",
        baseURL: "api",
      },
    ],
  ]
};
