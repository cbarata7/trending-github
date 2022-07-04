import { render, screen } from '@testing-library/react'
import React from 'react'

import App from '..'

const testIds = ['Menu', 'FiltersList', 'ReposList']

describe('<App>', () => {
    beforeEach(() => {
        render(<App />)
    })

    it('renders the title of the project', () => {
        expect(screen.getByText('Repo trending')).toBeInTheDocument()
    })

    it.each(testIds)('renders the %s component', (id) => {
        expect(screen.getByTestId(id)).toBeInTheDocument()
    })
})
