import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'section',
  type: 'document',
  title: 'Section',
  fields: [
    defineField({ name: 'layout', type: 'string', options: { list: ['featureGrid', 'stats', 'testimonial', 'rich'] }, validation: r => r.required() }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'subtitle', type: 'text' }),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'props', type: 'object', options: { collapsible: true, collapsed: true }, fields: [
      { name: 'items', type: 'array', of: [{ type: 'object', fields: [
        { name: 'title', type: 'string' },
        { name: 'desc', type: 'text' },
        { name: 'value', type: 'string' },
        { name: 'label', type: 'string' },
        { name: 'author', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'href', type: 'url' },
        { name: 'tags', type: 'array', of: [{ type: 'string' }] }
      ]}]}
    ]})
  ]
})
