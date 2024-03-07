export const Media = {
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Media',
    },
    //this is for those that do not have access to payload to be able to retrieve the data -> so we make it public
    access: {
        read: () => true,
    },
    upload: true,
    fields: [
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true,
        },
    ],
};