import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import { Pages } from './collections/Pages'
import { Media } from './collections/Media'


import Users from './collections/Users'
// import { PageTemplates } from './collections/pageTemplates/PageTemplates'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { TypicalHero } from './collections/TypicalHero'

import FormBuilder from '@payloadcms/plugin-form-builder';


export default buildConfig({
  //to make image link an absolute url so it can be displayed;payload sets a relative url in the API - so we add this in front to make it absolute
  serverURL:'http://localhost:4000',
  cors: [
    'http://localhost:3000'
  ],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve.alias,
            //fs: emptyModulePath,
          }
        }
      } 
    },
  },
  editor: lexicalEditor ({}),
  collections: [
    Users,
    Pages,
    TypicalHero,
    Media,
  ],
  globals: [
    Header,
    Footer,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    FormBuilder({
      fields: {
        payment: false,
        enableIntro: false,
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
