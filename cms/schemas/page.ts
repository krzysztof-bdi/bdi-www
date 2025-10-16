import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }}),
    defineField({ name: 'hero', type: 'object', fields: [
      { name: 'heading', type: 'string' },
      { name: 'lead', type: 'text' }
    ]}),
    defineField({ name: 'sections', type: 'array', of: [{ type: 'reference', to: [{ type: 'section' }] }] }),
    defineField({ name: 'seo', type: 'object', fields: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'text' }
    ]})
  ]
})
