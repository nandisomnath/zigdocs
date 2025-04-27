// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zigdocs',
  tagline: 'The Ultimate Zig Programming Guide',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://nandisomnath.github.io',
  // The path under which your site is served
  baseUrl: '/zigdocs/',

  // GitHub pages deployment config.
  organizationName: 'nandisomnath', // Your GitHub org/user name.
  projectName: 'zigdocs', // Your repo name.

  // Deployment branch and settings for GitHub Pages
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [{
    src: '//gc.zgo.at/count.js',
    async: true,
    "data-goatcounter": "https://ziglearn.goatcounter.com/count",
  }],

  plugins: [
    [require.resolve('docusaurus-lunr-search'), {
      indexBaseUrl: true,
      maxHits: 7,
      disableVersioning: true,
      excludeRoutes: [
        '/master/**/*', '/0.11/**/*', '/0.12/**/*', '/0.13/**/*',
      ],
    }]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          includeCurrentVersion: false,
          routeBasePath: '/', // Serve docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nandisomnath/zigdocs/tree/master/website/', // Edit link for docs
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: "0.14",
          admonitions: {
            keywords: ['cpp', 'go', 'js'],
            extendDefaults: true
          },
          versions: {
            "0.15": {
              label: 'Zig 0.15.0 (dev)',
              path: 'master',
            },
            "0.14": {
              label: 'Zig 0.14.0',
              path: '/',
            },
            "0.13": {
              label: 'Zig 0.13.0',
              path: '/0.13',
            },
            "0.12": {
              label: 'Zig 0.12.0',
              path: '/0.12',
            },
            "0.11": {
              label: "Zig 0.11.0",
              path: '/0.11',
            }
          },
        },
        blog: {
          routeBasePath: 'posts',
          showReadingTime: true,
          editUrl: 'https://github.com/nandisomnath/zigdocs/tree/master/website/', // Edit link for blog posts
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [{
        name: 'keywords',
        content: 'programming, zig, guide, tutorial, ziglang, learn, ziglearn, language, install, book'
      }],
      image: 'img/docusaurus-social-card.jpg', // Social card image

      navbar: {
        title: 'zig.guide',
        logo: {
          alt: 'zig.guide Logo',
          src: 'img/logo.svg',
        },
        items: [{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/posts',
          label: 'Posts',
          position: 'left'
        },
        {
          type: 'html',
          position: 'right',
          value: '<a rel="me" href="https://hachyderm.io/@sobeston" style="display: none;">Mastodon</a>',
        },
        {
          href: 'https://github.com/nandisomnath/zigdocs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        ],
      },

      footer: {
        style: 'dark',
        links: [{
          title: 'Community',
          items: [{
            label: 'GitHub',
            href: 'https://github.com/nandisomnath/zigdocs',
          },
          {
            label: 'Mastodon',
            href: 'https://hachyderm.io/@sobeston',
          },
          {
            label: 'Sponsor zig.guide',
            href: 'https://github.com/sponsors/Sobeston',
          },
          ],
        }],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'zig'],
        magicComments: [{
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {
            start: 'highlight-start',
            end: 'highlight-end'
          },
        },
        {
          className: 'code-block-hidden',
          line: 'hide-next-line',
          block: {
            start: 'hide-start',
            end: 'hide-end'
          },
        }],
      },
    }),

};

export default config;
