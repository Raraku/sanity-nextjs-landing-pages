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
                  buildHookId: '5eb973128f7aa34abbdb9fb0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n9tocugm',
                  apiId: '017be959-262c-4406-b9e1-25227f058a64'
                },
                {
                  buildHookId: '5eb973121842f528690a5f1d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gtknc58i',
                  apiId: '8ba437ef-521b-4f2b-bccf-ffd050acb9ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Raraku/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gtknc58i.netlify.app', category: 'apps'}
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
