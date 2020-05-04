module.exports = {
  title: 'Service Bus extension for NestJS',
  tagline: 'The tagline of my site',
  url: 'https://shlomiassaf.github.io/pebula-node/nest-sbus',
  baseUrl: process.env.GH_PAGES_BUILD ? '/pebula-node/nest-sbus/' : '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pebula', // Usually your GitHub org/user name.
  projectName: 'nest-sbus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '@pebula/nest-sbus',
      logo: {
        alt: '@pebula/nest-sbus',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/shlomiassaf/pebula-node/tree/master/packages/nest-sbus',
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
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shlomiassaf/pebula-node/tree/master/packages/nest-sbus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            'https://github.com/shlomiassaf/pebula-node/tree/master/packages/nest-sbus/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/shlomiassaf/pebula-node/tree/master/packages/nest-sbus/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
