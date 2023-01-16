import { writable } from 'svelte/store';

export const blogPageData = writable(null);
export const isFetching = writable(false);

async function fetchGithubLogs() {
    try {
        const URL = "https://api.github.com/repos/activate-glacier-instinct/100-days-of-code/contents/logs"
        const resp = await fetch(URL).then((data) => data.json());
        if (resp) return resp;
    } catch (err) {
        throw err
    }
}

// export function getBlogPageData(url:string) {
// 	isFetching.set(true);
// 	return new Promise((res) =>
// 		setTimeout(() => {
// 			res(count.set(Math.random()));
// 			isFetching.set(false);
// 		}, 1000)
// 	);
// }