
import './App.css';
import Feed from './components/Feed'
import UserFeed from './components/UserFeed'
import Login from './components/Login';
import Logout from './components/Logout';
import {BrowserRouter,Switch,Route}  from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Feed}/>
        <Route path='/user/:username' component={UserFeed} />
        <Route path='/login' component={Login}/>
        <Route path="/logout" component={Logout} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
