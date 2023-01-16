import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import blogPosts from '../data.json'

async function fetchGithubFile(slug: string) {
  const URL = `https://api.github.com/repos/activate-glacier-instinct/100-days-of-code/contents/logs/${slug}.md`
  const resp = await fetch(URL);
  console.log('resp ::', resp)
  if (resp.status === 200) {
      const data = await resp.json()
      return data.content
  } else {
      const data = await resp.json()
      throw error(resp.status, data.message)
  }

}

export const load: PageLoad = async function load({params, url}) {
  const { slug } = params;

  const data = await fetchGithubFile(slug)
  
  return data
};

export const prerender = true;
export const trailingSlash = 'always';