import { defineConfig } from 'sanity'
import page from './schemas/page'
import section from './schemas/section'
import article from './schemas/article'

export default defineConfig({
  name: 'default',
  title: 'BDI CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  schema: { types: [page, section, article] }
})
