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
                  buildHookId: '60cb6677e4e03609511379c2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hhh1izdh',
                  apiId: 'a6745854-e12f-4055-91e7-5ee2a9168938'
                },
                {
                  buildHookId: '60cb66778233fa1aa666401d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fifvzvrb',
                  apiId: 'a21ae0a7-cac2-4f5e-afe7-843227b65f9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devnixs/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fifvzvrb.netlify.app', category: 'apps'}
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
