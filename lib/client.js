import {createClient} from '@sanity/client';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '2en5dn0p',
  dataset: 'production',
  apiVersion: '2023-03-16',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);