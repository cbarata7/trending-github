import axios from 'axios'

const url =
    'https://api.github.com/search/repositories?q=created:>:currentDate&sort=stargazers_count&order=desc'

const url_language =
    'https://api.github.com/search/repositories?q=language::language+created:>:currentDate&sort=stargazers_count&order=desc'

export const getReposFromGitHub = (currentDate: string, language?: string) => {
    const callUrl = language
        ? url_language
              .replace(':currentDate', currentDate)
              .replace(':language', language)
        : url.replace(':currentDate', currentDate)

    return axios.get(callUrl)
}
