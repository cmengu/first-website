const {default: axios } = require ('axios');
const fs = require('fs');
require ('dotenv').config()
const { loadEnvConfig } = require('@next/env')
//load environment variables so that we know which backend we fetch our data from

loadEnvConfig(process.cwd())
//use axios req to fetch header global and footer global
async function fetchGlobalData() {
    try {
        console.log ('running initial fetch')
        const [header, footer, preFetchListings ] = 
            await Promise.all([
                axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`).then(
                    (res) => res?.data
                ),
                axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`).then(
                    (res) => res?.data
                ),
                
            //     axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listings?Limit=12&sort=-exclusive,-price`).then(
            //         (res) => {
            //             return res.data.docs.map((listing) => {
            //                 return ({
            //                     ...listing,
            //                     features: [],
            //                     agent: {},
            //                     description: {},
            //                     areaDescription: {},
            //                     excerpt: {},
            //                     images: listing.images.splice(0,1),
            //                 })
            //             })
            //         }
            //     ),
             ]);
        const globalData = {
            header,
            footer,
            //preFetchListings,
        };
//for every attribute in the global data object, it will create a new json file
        for (const [key, value] of Object.entries(globalData)) {
            if (value) {
                const jsonValue =JSON.stringify (value, null ,2);
                fs.writeFileSync(`src/globalData/${key}.json`, jsonValue);
            }
        }
    } catch (error) {
        console.error('Error fetching global data:', error);

        process.exit(1); 
    }
}

fetchGlobalData();