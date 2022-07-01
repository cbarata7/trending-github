import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '..'
import { repoMock } from '../../../mocks/RepoMock'

describe('<Card>', () => {
    beforeEach(() => {
        render(<Card repo={repoMock} />)
    })

    it('renders the name of the repo with a link to the github', () => {
        expect(screen.getByText(repoMock.name).closest('a')).toHaveAttribute(
            'href',
            'https://github.com/MalwareTech/CreateDesktop',
        )
    })

    it('renders the description of the repo', () => {
        expect(screen.getByText(repoMock.description)).toBeInTheDocument()
    })

    it('renders the badgers info', () => {
        expect(screen.getByText(repoMock.language)).toBeInTheDocument()
        expect(screen.getByText(repoMock.stargazers_count)).toBeInTheDocument()
        expect(screen.getByText(repoMock.watchers_count)).toBeInTheDocument()
        expect(screen.getByText(repoMock.network_count)).toBeInTheDocument()
        expect(screen.getByText(repoMock.open_issues_count)).toBeInTheDocument()
        expect(screen.getByText(repoMock.forks_count)).toBeInTheDocument()
    })
})
