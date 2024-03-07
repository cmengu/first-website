export const FormBlock = {
    slug: 'formBlock',
    labels: {
        singular: 'Form Block',
        plural: 'Form Blocks',
    },
    graphQL: {
      singularName: 'FormBlock',
    },
    fields: [
          {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
          },
          {
            type: 'text',
            name: 'firstName',
            label: 'Their First Name',
            admin: {
              readOnly: true,
            },
          },
          {
            type: 'text',
            name: 'lastName',
            label: 'Their Last Name',
            admin: {
              readOnly: true,
            },
          },
          {
            type: 'text',
            name: 'emailAddress',
            label: 'From Email',
            admin: {
                readOnly: true,
            },
          },
          {
            type: 'textarea',
            name: 'message',
            label: 'Message',
            admin: {
                readOnly: true,
            },
         },
         {
          name: 'enableIntro',
          label: 'Enable Intro Content',
          type: 'checkbox',
        },
        {
          name: 'introContent',
          label: 'Intro Content',
          type: 'richText',
          admin: {
            condition: (_, { enableIntro }) => Boolean(enableIntro),
          },
        },
      ]
}

