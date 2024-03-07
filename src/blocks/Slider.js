export const Slider = {
    slug: 'slider',
    labels: {
      singular: 'Slider',
      plural: 'Sliders',
    },
    fields: [
      {
          name: 'header',
          Label: 'Header',
          type: 'richText',
      },
      {
          name: 'body',
          Label: 'Body',
          type: 'richText',
      },
      {
        name: 'slides',
        label: 'Slides',
        labels: {
          singular: 'Slide',
          plural: 'Slides',
        },
        type: 'array',
        minRows: 3,
        maxRows: 9,
        fields: [
          {
              name: 'small-content',
              Label: 'Small Content',
              type: 'richText',
          },
          {
              name: 'media',
              label: 'Media',
              type: 'upload',
              relationTo: 'media',
          },
        ],
      },
    ],
  };
  
  