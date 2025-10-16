import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-10-01'
})

export async function getPageBySlug(slug: string) {
  const query = `*[_type=="page" && slug.current==$slug][0]{..., sections[]->}`
  return sanity.fetch(query, { slug })
}
