export default {
  widgets: [
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
                  buildHookId: '5f9188f211a77a0a744212fb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d11uhhhc',
                  apiId: '209a1119-2997-43b1-bd73-8efcf5ac7337'
                },
                {
                  buildHookId: '5f9188f2d73aff09069948ee',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rk9j9fu4',
                  apiId: 'b8bf271f-0007-4096-a6aa-9593ae7fd150'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pnn988/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rk9j9fu4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
