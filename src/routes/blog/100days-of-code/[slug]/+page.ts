import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async function load({ params, url }) {
  const { slug } = params;
  console.log('slug ::', slug)
  const importReq = import(`../../../../content/100days-of-code/logs/${slug}.md`)
  const { html } = await importReq
  return { html }
};

export const prerender = true;
export const trailingSlash = 'always';