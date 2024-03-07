export const TwoColumn = {
    slug: 'twoColumn',
    labels: {
        singular: 'Two Column Block',
        plural: 'Two Column Blocks',
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'text',
            label: 'Text',
            type: 'textarea',
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'direction',
            label: 'Direction',
            type: 'select',
            options: [
                {
                    text: 'Default',  // Using 'text' instead of 'label' for consistency
                    value: 'default',
                },
                {
                    text: 'Reverse',  // Using 'text' instead of 'label' for consistency
                    value: 'reverse',
                },
            ],
        }, 
    ]
}