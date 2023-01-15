import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

type GithubLog = {
    download_url: string
    git_url: string
    html_url: string
    name: string
    path: string
    sha: string
    size: number
    type: string
    url: string
    _links: {
        git: string
        html: string
        self: string
    }
}

async function fetchGithubLogs() {
    try {
        const URL = "https://api.github.com/repos/activate-glacier-instinct/100-days-of-code/contents/logs"
        const resp = await fetch(URL).then((data) => data.json());
        if (resp) return resp as Array<GithubLog>;
    } catch (err) {
        throw err
    }
}

export type BlogLink = {
    name: string
    html_url: string
}

export type BlogPosts = {
    posts: Array<BlogLink>
}

export const load: PageLoad = async function load() {
    try {
        const githubLogs = await fetchGithubLogs()

        if (githubLogs) {
            const parsedGithubLogs = githubLogs.map(({ html_url, name }) => {
                const [fileName, extension] = name.split('.')
                return { name: fileName, html_url };
            })
            return {
                posts: parsedGithubLogs
            } as BlogPosts;
        }

        throw error(505, 'Server error encountered!')
    } catch (err) { }
};



export const prerender = true;
export const trailingSlash = 'always';


