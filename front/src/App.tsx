import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import { useHistory } from 'react-router-dom'
import LobbyPage from './pages/LobbyPage/LobbyPage'
import StartPage from './pages/StartPage/StartPage'
import { RootState } from './store'
import Footer from './UI-components/footer/footer'
import Header from './UI-components/header/header'


function App() {

  const history = useHistory();
  const location = useSelector((state: RootState) => state.location)

  useEffect(() => {
      history.push(location)
  }, [location])

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/lobby">
          <LobbyPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
