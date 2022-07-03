import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { reposListMock } from '../../../mocks/ReposMock'
import ReposList from '..'
import { RepoInfoProvider } from '../../../contexts/RepoInfo'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const listOfIds = reposListMock.map(({ id }) => id)

describe('<ReposList>', () => {
    beforeEach(async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: { items: reposListMock },
        })

        await act(
            async () =>
                void render(
                    <RepoInfoProvider>
                        <ReposList />
                    </RepoInfoProvider>,
                ),
        )
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
