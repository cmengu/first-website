export const TypicalHero = {
    slug: 'typicalHero', 
    labels: {
        singular: 'Typical Hero Page',
        plural: 'Typical Hero Pages',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'richText',
        },
        {
            name: 'body',
            label: 'Body',
            type: 'richText',
        },
        {
            name: 'backgroundImage',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'direction',
            label: 'Direction',
            type: 'select',
            options: [
                {
                    label: 'Default',
                    value: 'default',
                },
                {
                    label: 'Reverse',
                    value: 'reverse',
                },
            ]
        }, 
    ]
}