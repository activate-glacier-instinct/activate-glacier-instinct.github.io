import type { PageLoad } from './$types';
import blogPosts from './data.json'

export const load: PageLoad = async function load() {
  return {
    posts: blogPosts
  };

};

export const prerender = true;
export const trailingSlash = 'always';