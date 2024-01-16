export default {
    name: 'teamMember',
    type: 'document',
    title: 'Team Member',
    fields: [
      {
        name: 'photo',
        type: 'image',
        title: 'Photo'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'positon',
        type: 'string',
        title: 'Position'
      },
      {
        name: 'hierachy',
        type: 'number',
        title: 'Hierachy'
      },
    ]
  }