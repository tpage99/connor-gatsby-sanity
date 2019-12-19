export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dfae589392a28e7c9aa9f1a',
                  title: 'Sanity Studio',
                  name: 'connor-gatsby-sanity-studio',
                  apiId: '4fbc261d-9ffe-4905-9b24-8dc32c989b0c'
                },
                {
                  buildHookId: '5dfae5894ba3d2e35136b679',
                  title: 'Portfolio Website',
                  name: 'connor-gatsby-sanity',
                  apiId: '0fb111c0-dcdc-4263-8dd9-8012ff766cc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tpage99/connor-gatsby-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://connor-gatsby-sanity.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
