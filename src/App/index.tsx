import React from 'react'
import scss from './styles.module.scss'
import '../main.scss'
import ReposList from '../components/ReposList'
import { RepoInfoProvider } from '../contexts/RepoInfo'

function App(): JSX.Element {
    return (
        <RepoInfoProvider>
            <header className={scss['App-header']}>
                <ReposList />
            </header>
        </RepoInfoProvider>
    )
}

export default App
