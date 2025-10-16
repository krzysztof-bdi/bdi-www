import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', type: 'text' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'publishedAt', type: 'datetime' })
  ]
})
