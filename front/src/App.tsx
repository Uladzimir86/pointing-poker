import { Route, Switch } from 'react-router'
import GameSettings from './components/game-settings/game-settings.component'
import Footer from './UI-components/footer/footer'
import Header from './UI-components/header/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <h1> Ya main stranica</h1>
        </Route>
        <Route exact path="/lobby">
          <GameSettings />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
