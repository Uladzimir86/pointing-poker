import { Route, Switch } from 'react-router'
import LobbyPage from './pages/LobbyPage/lobby-page'
import StartPage from './pages/StartPage/StartPage'
import Footer from './UI-components/footer/footer'
import Header from './UI-components/header/header'

function App() {
  return (
    <div className="App">
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
