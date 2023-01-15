import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import blogPosts from '../data.json'

type BlogPost = {
  title: string,
  body: string
}

export const load: PageLoad = async function load({ params, url }) {
  const { slug } = params;
  const { pathname } = url;

  const post = blogPosts.filter((post: BlogPost) => post.title === slug)[0]
  if (!post) throw error(404, 'Not found!')

  return {
    post
  };

};

export const prerender = true;
export const trailingSlash = 'always';