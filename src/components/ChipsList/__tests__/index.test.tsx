import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

import { SearchParamsContext } from '../../../contexts/SearchParams'
import ChipList from '..'

const searchParamsMock = {
    date: '2022-07-04',
    favorites: true,
    language: 'JavaScript',
}

const mockSetSearchParams = jest.fn()

describe('<ChipList>', () => {
    beforeEach(() => {
        render(
            <SearchParamsContext.Provider
                value={{
                    searchParams: searchParamsMock,
                    setSearchParams: mockSetSearchParams,
                }}
            >
                <ChipList />
            </SearchParamsContext.Provider>,
        )
    })

    it('renders the chips for the favorites and the language', () => {
        expect(screen.getByText('favorites')).toBeInTheDocument()
        expect(
            screen.getByText(`language:${searchParamsMock.language}`),
        ).toBeInTheDocument()
    })

    it('removes the favorite chip when the user clicks on the close button', async () => {
        const closeButtons = screen.queryAllByTestId('CancelIcon')

        await waitFor(() => {
            fireEvent.click(closeButtons[0])
            expect(mockSetSearchParams).toBeCalledWith({
                date: '2022-07-04',
                favorites: false,
                language: 'JavaScript',
            })
        })
    })

    it('removes the language chip when the user clicks on the close button', async () => {
        const closeButtons = screen.queryAllByTestId('CancelIcon')

        await waitFor(() => {
            fireEvent.click(closeButtons[1])

            expect(mockSetSearchParams).toBeCalledWith({
                date: '2022-07-04',
                favorites: true,
                language: undefined,
            })
        })
    })
})
