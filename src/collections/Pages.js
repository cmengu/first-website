import { CallToAction } from "../blocks/CallToAction";
import { FormBlock } from "../blocks/FormBlocks";
import { Hero } from "../blocks/Hero";
import { SimpleRichText } from "../blocks/SimpleRichText";
import { Slider } from "../blocks/Slider";
import { TwoColumn } from "../blocks/TwoColumn";

export const Pages = {
    slug: 'pages',
    labels:  {
        singular: 'Page',
        plural: 'Pages',
    },
    //this is for those that do not have access to payload to be able to retrieve the data -> so we make it public
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Content',
              fields: [
                {
                  name: 'layout',
                  label: 'Layout',
                  type: 'blocks',
                  required: true,
                  blocks: [
                    FormBlock,
                    CallToAction,
                    Hero,
                    SimpleRichText,
                    TwoColumn,
                    Slider,
                  ],
                },
              ],
            },
          ],
        },
    ]
}
console.log('Pages Collection Configuration:', Pages);