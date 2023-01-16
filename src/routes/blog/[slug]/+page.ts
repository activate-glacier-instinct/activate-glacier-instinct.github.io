import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import blogPosts from '../data.json'

async function fetchGithubFile(slug: string) {
  const URL = `https://raw.githubusercontent.com/activate-glacier-instinct/100-days-of-code/master/logs/${slug}.md`
  const resp = await fetch(URL);
  console.log('resp ::', resp)
  if (resp.status === 200) {
      const data = await resp.json()
      return data
  } else {
      const data = await resp.json()
      throw error(resp.status, data.message)
  }

}

export const load: PageLoad = async function load({params, url}) {
  const { slug } = params;
  const { pathname } = url;

  const data = await fetchGithubFile(slug)

  console.log('slug / load ::', data)
  
  return data
};

export const prerender = true;
export const trailingSlash = 'always';