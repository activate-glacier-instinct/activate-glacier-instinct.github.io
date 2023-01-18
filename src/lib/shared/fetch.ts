import { error } from '@sveltejs/kit';

export type GithubLog = {
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

export async function getGithubLogs() {
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
