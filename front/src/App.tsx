import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import { GamePage } from './pages/GamePage/GamePage'
import { useHistory } from 'react-router-dom'
import LobbyPage from './pages/LobbyPage/LobbyPage'
import StartPage from './pages/StartPage/StartPage'
import { RootState } from './store'
import Footer from './UI-components/footer/footer'
import Header from './UI-components/header/header'
import { ResultsPage } from './pages/ResultsPage/ResultsPage'
import { Chat } from './pages/ChatModule/Chat'

function App() {
  const history = useHistory()
  const location = useSelector((state: RootState) => state.location)
  const alert = useSelector((state: RootState) => state.alert)
  const dispatch = useDispatch()
  const [showChatbar, toggleShowChatbar] = useState<boolean>(false)

  useEffect(() => {
    history.push(location)
    console.log(showChatbar)
  }, [location, showChatbar])

  return (
    <div className="app">
      <Header showChatbar={showChatbar} toggleShowChatbar={toggleShowChatbar} />
      {alert && (
        <div className="alert">
          <span>{alert}</span>
          <button
            type="button"
            className="alert__btn"
            onClick={() => dispatch({ type: 'HIDE_ALERT' })}
          />
        </div>
      )}
      <div className='container'>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/lobby">
          <LobbyPage/>
        </Route>
        <Route exact path="/game">
          <GamePage />
        </Route>
        <Route exact path="/results">
          <ResultsPage />
        </Route>
      </Switch>
      <Chat showChatbar={showChatbar}/>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
