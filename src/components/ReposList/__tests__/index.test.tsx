import React from 'react'
import { render, screen } from '@testing-library/react'
import { reposListMock } from '../../../mocks/ReposMock'
import ReposList from '..'

const listOfIds = reposListMock.map(({ id }) => id)

describe('<ReposList>', () => {
    beforeEach(() => {
        render(<ReposList repos={reposListMock} />)
    })

    it.each(listOfIds)('renders the card for the repo with the id %s', (id) => {
        expect(screen.getByTestId(`testing-Card-${id}`)).toBeInTheDocument()
    })
})
