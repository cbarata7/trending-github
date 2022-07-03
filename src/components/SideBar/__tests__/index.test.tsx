import { fireEvent, render, screen, within } from '@testing-library/react'
import React from 'react'

import { SearchParamsContext } from '../../../contexts/SearchParams'
import SideBar from '..'

const searchParamsMock = {
    date: '2022-07-04',
    favorites: false,
}

const mockSetSearchParams = jest.fn()

describe('<SideBar>', () => {
    beforeEach(() => {
        render(
            <SearchParamsContext.Provider
                value={{
                    searchParams: searchParamsMock,
                    setSearchParams: mockSetSearchParams,
                }}
            >
                <SideBar />
            </SearchParamsContext.Provider>,
        )
    })

    it('renders the button for placing the favorites filter', () => {
        expect(
            screen.getByRole('button', { name: 'My favorite repos' }),
        ).toBeInTheDocument()
    })

    it('sets the filter for the favorites filter when the user clicks on it', () => {
        const button = screen.getByRole('button', { name: 'My favorite repos' })

        fireEvent.click(button)

        expect(mockSetSearchParams).toBeCalledWith({
            date: '2022-07-04',
            favorites: true,
        })
    })

    it('renders the select for placing the language filter', () => {
        expect(
            screen.getByRole('button', { name: /Language/i }),
        ).toBeInTheDocument()
    })

    it('sets the filter for the language filter when the user clicks on it', async () => {
        const button = screen.getByRole('button', { name: /Language/i })

        fireEvent.mouseDown(button)

        const listbox = within(screen.getByRole('listbox'))

        fireEvent.click(listbox.getByText('JavaScript'))

        expect(mockSetSearchParams).toBeCalledWith({
            date: '2022-07-04',
            favorites: false,
            language: 'JavaScript',
        })
    })
})
