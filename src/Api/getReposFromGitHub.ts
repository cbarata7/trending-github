import axios from 'axios'

const url =
    'https://api.github.com/search/repositories?q=created:>:currentDate&sort=stars&order=desc'

export const getReposFromGitHub = (currentDate: string) =>
    axios.get(url.replace(':currentDate', currentDate))
