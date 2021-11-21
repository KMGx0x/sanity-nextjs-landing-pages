export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619adbd1631a90fd7a9db544',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jkhbfe8f',
                  apiId: '9488656f-42a1-487c-bbd5-baffdd87d926'
                },
                {
                  buildHookId: '619adbd2f0ab4d3c0232557d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8pmhvto8',
                  apiId: 'a0b1be66-5a0f-4eb8-b196-8d2d24afd379'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KMGx0x/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8pmhvto8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
