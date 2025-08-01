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
    path: '/ezo-snippet-field/',
    component: ComponentCreator('/ezo-snippet-field/', '7e7'),
    exact: true
  },
  {
    path: '/ezo-snippet-field/',
    component: ComponentCreator('/ezo-snippet-field/', '972'),
    routes: [
      {
        path: '/ezo-snippet-field/',
        component: ComponentCreator('/ezo-snippet-field/', '711'),
        routes: [
          {
            path: '/ezo-snippet-field/tags',
            component: ComponentCreator('/ezo-snippet-field/tags', 'ba1'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/beginner',
            component: ComponentCreator('/ezo-snippet-field/tags/beginner', '7e2'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/data-store',
            component: ComponentCreator('/ezo-snippet-field/tags/data-store', '00f'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/gui',
            component: ComponentCreator('/ezo-snippet-field/tags/gui', '8be'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/health',
            component: ComponentCreator('/ezo-snippet-field/tags/health', 'c6a'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/lua',
            component: ComponentCreator('/ezo-snippet-field/tags/lua', '97d'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/roblox',
            component: ComponentCreator('/ezo-snippet-field/tags/roblox', 'cfd'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/tags/save',
            component: ComponentCreator('/ezo-snippet-field/tags/save', '613'),
            exact: true
          },
          {
            path: '/ezo-snippet-field/',
            component: ComponentCreator('/ezo-snippet-field/', '72b'),
            routes: [
              {
                path: '/ezo-snippet-field/intro',
                component: ComponentCreator('/ezo-snippet-field/intro', '437'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/overview',
                component: ComponentCreator('/ezo-snippet-field/overview', '8c8'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/snippets/click-detector',
                component: ComponentCreator('/ezo-snippet-field/snippets/click-detector', '847'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/snippets/datastore-save',
                component: ComponentCreator('/ezo-snippet-field/snippets/datastore-save', 'a8a'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/snippets/gui-health-bar',
                component: ComponentCreator('/ezo-snippet-field/snippets/gui-health-bar', '063'),
                exact: true,
                sidebar: "ezoSidebar"
              },
              {
                path: '/ezo-snippet-field/tutorial-basics/congratulations',
                component: ComponentCreator('/ezo-snippet-field/tutorial-basics/congratulations', '764'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ezo-snippet-field/tutorial-basics/create-a-blog-post', 'c64'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-basics/create-a-document',
                component: ComponentCreator('/ezo-snippet-field/tutorial-basics/create-a-document', 'b73'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-basics/create-a-page',
                component: ComponentCreator('/ezo-snippet-field/tutorial-basics/create-a-page', '2c5'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ezo-snippet-field/tutorial-basics/deploy-your-site', 'c4c'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-basics/markdown-features',
                component: ComponentCreator('/ezo-snippet-field/tutorial-basics/markdown-features', '2f4'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/ezo-snippet-field/tutorial-extras/manage-docs-versions', '61d'),
                exact: true
              },
              {
                path: '/ezo-snippet-field/tutorial-extras/translate-your-site',
                component: ComponentCreator('/ezo-snippet-field/tutorial-extras/translate-your-site', '1f7'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
