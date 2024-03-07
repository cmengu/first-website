export const CallToAction = {
    slug: 'callToAction',
    labels: {
      singular: 'Call to Action',
      plural: 'Calls to Action',
    },
    fields: [
      {
        name: 'content',
        label:'Content',
        type: 'richText',
      },
      {
        name: 'buttons',
        type: 'array',
        label: 'Buttons',
        minRows: 1,
        maxRows: 2,
        labels: {
          singular: 'Button',
          plural: 'Buttons',
        },
        fields: [
          {
            type: 'row',
            fields: [
              {
                name: 'label',
                label: 'Button Label',
                type: 'text',
                required: true,
                admin: {
                  width: '50%',
                },
              },
              {
                name: 'type',
                label: 'Button Type',
                required: true,
                type: 'radio',
                defaultValue: 'page',
                options: [
                  {
                    label: 'Page',
                    value: 'page',
                  },
                  {
                    label: 'Custom URL',
                    value: 'custom',
                  },
                ],
                admin: {
                  width: '50%',
                  layout: 'horizontal',
                },
              },
            ],
          },
          {
            name: 'page',
            label: 'Page to link to',
            type: 'relationship',
            relationTo: 'pages',
            required: true,
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'page',
              width: '50%',
            },
          },
          {
            name: 'url',
            label: 'Custom URL',
            type: 'text',
            required: true,
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'custom', //custom works here as the type for siblingdata is just looking for a unique identifier
              width: '50%',
            },
          },
          {
            name: 'newTab',
            type: 'checkbox',
            label: 'Open in new tab',
            required: true,
          },
        ],
      },
    ],
  };