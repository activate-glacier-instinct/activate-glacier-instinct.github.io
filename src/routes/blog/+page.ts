import type { PageLoad } from './$types';
import blogPages from '../../content/blog/pages.json'

export const load: PageLoad = async function load() {
    return {
        posts: blogPages
    }
};


export const prerender = true;
export const trailingSlash = 'always';
