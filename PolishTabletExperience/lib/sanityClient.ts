import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'ayqpon42',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})