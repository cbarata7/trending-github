import { act, render, screen } from '@testing-library/react'
import axios from 'axios'
import React from 'react'

import { ReactQueryProvider } from '../../../contexts/ReactQuery'
import { RepoInfoProvider } from '../../../contexts/RepoInfo'
import { reposListMock } from '../../../mocks/ReposMock'
import ReposList from '..'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const listOfIds = reposListMock.map(({ id }) => id)

const renderHelper = () =>
    act(
        async () =>
            void render(
                <ReactQueryProvider>
                    <RepoInfoProvider>
                        <ReposList />
                    </RepoInfoProvider>
                </ReactQueryProvider>,
            ),
    )

describe('<ReposList>', () => {
    describe('when there is results to show', () => {
        beforeEach(async () => {
            mockedAxios.get.mockResolvedValueOnce({
                data: { items: reposListMock },
            })

            await renderHelper()
        })

        it.each(listOfIds)(
            'renders the card for the repo with the id %s',
            async (id) => {
                expect(
                    await screen.findByTestId(`testing-Card-${id}`),
                ).toBeInTheDocument()
            },
        )
    })

    describe('when there is no results to show', () => {
        beforeEach(async () => {
            mockedAxios.get.mockResolvedValueOnce({
                data: { items: [] },
            })
            await renderHelper()
        })

        it('renders the text if there is no results in the search', async () => {
            expect(
                screen.getByText("There's no results for these filters"),
            ).toBeInTheDocument()
        })
    })
})
