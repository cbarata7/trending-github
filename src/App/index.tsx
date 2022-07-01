import React from 'react'
import scss from './styles.module.scss'
import '../main.scss'
import Card from '../components/Card'
import { repoMock } from '../mocks/RepoMock'

function App(): JSX.Element {
    return (
        <div>
            <header className={scss['App-header']}>
                <Card repo={repoMock}></Card>
            </header>
        </div>
    )
}

export default App
