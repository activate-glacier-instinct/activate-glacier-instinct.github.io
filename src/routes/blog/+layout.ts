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
    const URL = "https://api.github.com/repos/activate-glacier-instinct/100-days-of-code/contents/logs"
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const data = await resp.json()
        return data as Array<GithubLog>
    } else {
        const data = await resp.json()
        throw error(resp.status, data.message)
    }

}

export type BlogLink = {
    name: string
    html_url: string
}

export const load: PageLoad = async function load() {
    const githubLogs = await fetchGithubLogs()

    if (githubLogs) {
        const parsedGithubLogs = githubLogs.map(({ html_url, name }) => {
            const [fileName, extension] = name.split('.')
            return { name: fileName, html_url };
        })
        return {
            posts: parsedGithubLogs
        };
    }

    throw error(500, 'Server error encountered!')
};
