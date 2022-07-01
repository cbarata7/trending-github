import React from 'react'
import scss from './styles.module.scss'
import '../main.scss'
import { reposListMock } from '../mocks/ReposMock'
import ReposList from '../components/ReposList'

function App(): JSX.Element {
    return (
        <div>
            <header className={scss['App-header']}>
                <ReposList repos={reposListMock}></ReposList>
            </header>
        </div>
    )
}

export default App
