export type Repo = {
    id: number
    name: string
    full_name: string
    private: boolean
    owner: {
        login: string
        id: number
        url: string
    }
    html_url: string
    description: string
    fork: boolean
    created_at: string
    updated_at: string
    pushed_at: string
    size: number
    stargazers_count: number
    watchers_count: number
    language: string
    forks_count: number
    visibility: string
    forks: number
    watchers: number
    score: number
    network_count: number
    open_issues_count: number
}
