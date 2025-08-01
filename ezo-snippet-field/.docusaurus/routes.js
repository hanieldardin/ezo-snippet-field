import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ezo-snippet-field/__docusaurus/debug',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug', '9fa'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/__docusaurus/debug/config',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug/config', '792'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/__docusaurus/debug/content',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug/content', '034'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/__docusaurus/debug/globalData',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug/globalData', '021'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/__docusaurus/debug/metadata',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug/metadata', '9b1'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/__docusaurus/debug/registry',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug/registry', '5e5'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/__docusaurus/debug/routes',
    component: ComponentCreator('/ezo-snippet-field/__docusaurus/debug/routes', '7d3'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog',
    component: ComponentCreator('/ezo-snippet-field/blog', '850'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/archive',
    component: ComponentCreator('/ezo-snippet-field/blog/archive', 'dd2'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/authors',
    component: ComponentCreator('/ezo-snippet-field/blog/authors', '3b9'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ezo-snippet-field/blog/authors/all-sebastien-lorber-articles', '3cf'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/authors/yangshun',
    component: ComponentCreator('/ezo-snippet-field/blog/authors/yangshun', '99f'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/first-blog-post',
    component: ComponentCreator('/ezo-snippet-field/blog/first-blog-post', 'fb9'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/long-blog-post',
    component: ComponentCreator('/ezo-snippet-field/blog/long-blog-post', 'a29'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/mdx-blog-post',
    component: ComponentCreator('/ezo-snippet-field/blog/mdx-blog-post', 'cdb'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/tags',
    component: ComponentCreator('/ezo-snippet-field/blog/tags', 'ba8'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/tags/docusaurus',
    component: ComponentCreator('/ezo-snippet-field/blog/tags/docusaurus', 'ed2'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/tags/facebook',
    component: ComponentCreator('/ezo-snippet-field/blog/tags/facebook', '230'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/tags/hello',
    component: ComponentCreator('/ezo-snippet-field/blog/tags/hello', 'd06'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/tags/hola',
    component: ComponentCreator('/ezo-snippet-field/blog/tags/hola', 'faa'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/blog/welcome',
    component: ComponentCreator('/ezo-snippet-field/blog/welcome', '222'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/markdown-page',
    component: ComponentCreator('/ezo-snippet-field/markdown-page', 'b2e'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/docs',
    component: ComponentCreator('/ezo-snippet-field/docs', '059'),
    routes: [
      {
        path: '/ezo-snippet-field/docs',
        component: ComponentCreator('/ezo-snippet-field/docs', '349'),
        routes: [
          {
            path: '/ezo-snippet-field/docs/tags',
            component: ComponentCreator('/ezo-snippet-field/docs/tags', '855'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/beginner',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/beginner', '4a2'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/data-store',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/data-store', '175'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/gui',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/gui', '464'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/health',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/health', '1f5'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/lua',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/lua', '1d4'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/roblox',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/roblox', 'c33'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs/tags/save',
            component: ComponentCreator('/ezo-snippet-field/docs/tags/save', 'bb5'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/docs',
            component: ComponentCreator('/ezo-snippet-field/docs', '789'),
            routes: [
              {
                path: '/ezo-snippet-field/docs/intro',
                component: ComponentCreator('/ezo-snippet-field/docs/intro', '6d8'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/docs/snippets/click-detector',
                component: ComponentCreator('/ezo-snippet-field/docs/snippets/click-detector', '69a'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/docs/snippets/datastore-save',
                component: ComponentCreator('/ezo-snippet-field/docs/snippets/datastore-save', 'c81'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/docs/snippets/gui-health-bar',
                component: ComponentCreator('/ezo-snippet-field/docs/snippets/gui-health-bar', 'd27'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-basics/congratulations', 'd08'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-basics/create-a-blog-post', 'a45'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-basics/create-a-document', '7b8'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-basics/create-a-page', '762'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-basics/deploy-your-site', 'b5e'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-basics/markdown-features', '4eb'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-extras/manage-docs-versions', '2d9'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/ezo-snippet-field/docs/tutorial-extras/translate-your-site', '7df'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ezo-snippet-field/',
    component: ComponentCreator('/ezo-snippet-field/', '7e7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
