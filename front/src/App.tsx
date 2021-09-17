import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
<<<<<<< HEAD
import { GamePage } from './pages/GamePage/GamePage'
=======
import { useHistory } from 'react-router-dom'
>>>>>>> 491ae08ef4c711c48b0b328e7df753c22212651c
import LobbyPage from './pages/LobbyPage/LobbyPage'
import StartPage from './pages/StartPage/StartPage'
import { RootState } from './store'
import Footer from './UI-components/footer/footer'
import Header from './UI-components/header/header'


function App() {

  const history = useHistory();
  const location = useSelector((state: RootState) => state.location)
  const alert = useSelector((state: RootState) => state.alert)
  const dispatch = useDispatch();

  useEffect(() => {
      history.push(location)
  }, [location])

  return (
    <div className="app">
      <Header />
      {alert && (
        <div className="alert">
          <span>{alert}</span>
          <button type="button" className="alert__btn" onClick={() => dispatch({type: 'HIDE_ALERT'})}/>
        </div>
      )}
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/lobby">
          <LobbyPage />
        </Route>
        <Route exact path="/game">
          <GamePage/>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
