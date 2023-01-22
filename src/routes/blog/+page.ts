import type { PageLoad } from './$types';
import blogPages from '../../content/blog/pages.json'

export const load: PageLoad = async function load() {
    // const importRequests = import.meta.glob('../../content/100days-of-code/logs/*');
    // const outputPosts = Object.keys(importRequests).map(reqLabel => {
    //     const labelParts = reqLabel.split('/')
    //     // Returns the last part or the title of the file
    //     return labelParts[labelParts.length - 1] 
    // });
    return {
        posts: blogPages
    }
};


export const prerender = true;
export const trailingSlash = 'always';
