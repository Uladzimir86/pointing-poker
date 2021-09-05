import React from "react"
import StartPage from "./pages/StartPage/StartPage"
import Footer from "./UI-components/footer/footer"
import Header from "./UI-components/header/header"

function App() {
  return (
    <div className="App">
      <Header/>
      <StartPage/>
      <Footer/>
    </div>
  )
}

export default App
