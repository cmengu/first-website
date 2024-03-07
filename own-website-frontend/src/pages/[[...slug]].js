import React from "react";
import axios from "axios";
import RenderBlocks from "../../utils/RenderBlocks";
import Blocks from '../components/Blocks';
//for every page that is rendered, it shows the render page layout

export default function Page({ page }) {
    return (
        <div>
            <RenderBlocks layout = {page?.layout} />
            <React.Fragment>
                <Blocks blocks={page?.layout} />
            </React.Fragment>
        </div>
    )
}

export const getStaticPaths = async () => {
    const pageReq = await axios(`/api/pages?limit=100`);
    const pageData = pageReq.data;

    const returnObj = {
        paths: pageData.docs.map(( {slug , id} ) => {
            return {
                params: {
                    slug: slug !== 'index' ? slug.split('/') :false
                },
            };
        }),
        fallback: false,
    };
    return returnObj;
};

export const getStaticProps = async (ctx) => {
    const slug = ctx.params?.slug || 'index';
    const preview = ctx.preview || false;

    const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`);
    let pageData = pageReq.data.docs[0]
    return {
        props: {
            page: pageData,
        },
    };

};

//uses axios to request the backend and you can see that there is no url specified as we already defined that globally in the code
//it will check the payload RESTAPI in the collection pages and it will map through all the pages and for every page it will return the slug


/* export const getStaticPaths = async () => { //async means it  does not block the execution of the rest of the programme while waiting for the request

    const pageReq = await axios(`/api/pages?limit=100`);
    const pageData = pageReq.data; //extracts the pages stored 

    const pagesToSave = pageData.docs


    const templateReq = await axios(`/api/pageTemplates?limit=100`);
    const pageTemplates = templateReq.data.docs; //extracts the page templates stored

    for (const template of pageTemplates) {
        // fetch data from template collection
        const templateCollectionReq = await axios(`/api/${template.templateCollection}?limit=100`); //here we feetch the data in the page templates
        const templateCollectionData = templateCollectionReq.data.docs;


        for (const item of templateCollectionData) {

            const populatedLayout = template.layout.map((layoutBlock) => {
                if (layoutBlock.blockType) { }

                // Replace placeholders (<%= ... %>) in layout
                let layoutString = JSON.stringify(layoutBlock);
                // Parse EJS Placeholders
                const regex = /<%=(.*?)%>/g;
                const matches = layoutString.match(regex);
                if (matches) {
                    for (const match of matches) {
                        const key = match.replace('<%=', '').replace('%>', '').trim();
                        const value = item[key];

                        // If it's a rich Text, replace the entire field
                        if (value?.root?.children?.length) {
                            layoutBlock[key] = value;
                            return layoutBlock;
                        } else {
                            // Else just replace the specific parts
                            layoutString = layoutString.replace(match, value);
                        }
                    }
                }
                return (JSON.parse(layoutString));
            })

            pagesToSave.push({
                ...item,
                slug: `${template.slug}/${item.slug}`,
                layout: populatedLayout
            })
        }
    }
//this part is saving the data to package.json so it is easier for the next function to execute
    const fs = await import('./fs');
    fs.writeFileSync('./src/pages.json', JSON.stringify(pagesToSave, null, 2));



//map is used to transform each element (slug) of an array to a different value (true or false for checking index)

//When fallback is false, it means that Next.js will return a 404 error for any paths not generated at build time.
//The resulting structure is an object with a params property, and within params, there is a slug property that contains either an array of split slugs or false if the original slug was 'index'.

//now since we have a list of slugs from the pages collection and everytime the above function is called, the function below will too
//so it will request the backend again, but will specfiically target the pages with the slugs given from above and it will extract the page property with the page data
    const returnObj = {
        paths: pagesToSave.map((page) => ({
            params: {
                slug: page.slug === 'index' ? [] : page.slug.split('/'),
            },
        })),
        fallback: false,
    };

    return returnObj;
};

export const getStaticProps = async (ctx) => {
    const slug = ctx.params?.slug || ['index'];

    const fs = await import('./fs');
    const pages = JSON.parse(fs.readFileSync('./src/pages.json', 'utf8'));
    const pageData = pages.find((page) => page.slug === slug.join('/'));


    return {
        props: {
            page: pageData,
        },
    };

}; */