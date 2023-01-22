import type { PageLoad } from './$types';

export const load: PageLoad = async function load() {
    const importRequests = import.meta.glob('../../../content/100days-of-code/logs/*');
    const outputPosts = Object.keys(importRequests).map(reqLabel => {
        const labelParts = reqLabel.split('/')
        // Returns the last part or the title of the file
        const lastPart = labelParts[labelParts.length - 1]
        return {
            path: lastPart,
            title: lastPart.split('.')[0]
        }
    });
    return {
        posts: outputPosts
    }
};


export const prerender = true;
export const trailingSlash = 'always';