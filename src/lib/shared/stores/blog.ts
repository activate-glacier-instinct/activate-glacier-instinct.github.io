import { writable } from 'svelte/store';
import { readable } from 'svelte/store'
import { getGithubLogs, type GithubLog } from '../fetch'

type Posts = Array<GithubLog>

export const posts = readable([] as Posts, set => {
  const fetchPosts = async () => {
    const resp = await getGithubLogs()
    return resp
  }
  fetchPosts()
    .then(data => data && set(data))
    .catch(err => console.error('Failed to get posts', err))
  return () => {
    console.log('Unsubscribed')
  }
})
