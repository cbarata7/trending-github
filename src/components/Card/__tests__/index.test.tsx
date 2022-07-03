import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Card from '..'
import { reposListMock } from '../../../mocks/ReposMock'

const repoMock = reposListMock[0]

describe('<Card>', () => {
    beforeEach(() => {
        render(<Card repo={repoMock} />)
    })

    it('renders the name of the repo with a link to the github', () => {
        expect(screen.getByText(repoMock.name).closest('a')).toHaveAttribute(
            'href',
            repoMock.html_url,
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

    it('renders the favorites button', () => {
        expect(
            screen.getByRole('button', { name: 'favorite' }),
        ).toBeInTheDocument()
    })

    it('changes the favorite icon when the users clicks on the button', () => {
        const button = screen.getByRole('button', { name: 'favorite' })

        expect(screen.getByTestId('notFavoriteIcon')).toBeInTheDocument()
        expect(screen.queryByTestId('favoriteIcon')).not.toBeInTheDocument()

        fireEvent.click(button)

        expect(screen.queryByTestId('notFavoriteIcon')).not.toBeInTheDocument()
        expect(screen.queryByTestId('favoriteIcon')).toBeInTheDocument()

        fireEvent.click(button)

        expect(screen.getByTestId('notFavoriteIcon')).toBeInTheDocument()
        expect(screen.queryByTestId('favoriteIcon')).not.toBeInTheDocument()
    })
})
