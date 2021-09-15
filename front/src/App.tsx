import { Route, Switch } from 'react-router'
import { GamePage } from './pages/GamePage/GamePage'
import LobbyPage from './pages/LobbyPage/LobbyPage'
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
        <Route exact path="/game">
          <GamePage/>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
