import { Route, Switch } from 'react-router'
import { useEffect, useState } from 'react';
import LobbyPage from './pages/LobbyPage/lobby-page'
import StartPage from './pages/StartPage/StartPage'
import Footer from './UI-components/footer/footer'
import Header from './UI-components/header/header'


function App() {
  const [arrOfIssues, setArrOfIssues] = useState([{createButton: true}]);
  const issue =  {
    deleteButton: true,
    editButton: true,
    priority: 'low',
    number: '98',
  }


// wsConnection.onerror = function(error) {
//     alert("Ошибка " + error.message);
// };

// const wsSend = function(data: string) {
// // readyState - true, если есть подключение
//     if(!wsConnection.readyState){
//         setTimeout(function (){
//             wsSend(data);
//         },100);
//     } else {
//         wsConnection.send(data);
//     }
// };
// async function resp(){
//       await fetch('http://localhost:4000/issues')
//       .then((res) => res.json())
//       .then((res) => setArrOfIssues([...res, ...arrOfIssues]));
//     }
  // useEffect(() => {
  //   resp();
  // },[]);
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
